### Content

- [Chapter 7. WebAssembly](#chapter7)
  - [Your First WebAssembly](#YourFirstWebAssembly)
  - [Atomic Operations in WebAssembly](#AtomicOperationsWebAssembly)
  - [Compiling C Programs to WebAssembly with Emscripten](#CompilingCProgramsWebAssembly)
  - [Other WebAssembly Compilers](#OtherWebAssemblyCompilers)
  - [AssemblyScript](#HappycoinAssemblyScript)
  - [Happycoin in AssemblyScript](#HappycoinAssemblyScript)

## <div id='chapter7'/> Chapter 7. WebAssembly

Modern JavaScript runtimes also support WebAssembly. WebAssembly (often abbreviated as WASM) is a binary-encoded instruction format that runs on a stack-based virtual machine. The main motivation behind having such a thing in browsers and other JavaScript runtimes is to run the parts of your program that are performance-sensitive in an environment where execution can happen much faster than JavaScript. Another goal is to provide a compile target for typically compiled languages like C, C++, and Rust. This opens the door for developers of those languages to develop for the web.

Generally, the memory used by WebAssembly modules is represented by _ArrayBuffers_, but it can also be represented by _SharedArrayBuffers_. In addition, there are WebAssembly instructions for atomic operations, similar to the _Atomics_ object we have in JavaScript. With SharedArrayBuffers, atomic operations, and web workers (or worker_threads in Node.js), we have enough to do the full suite of multithreaded programming tasks using WebAssembly.

### <div id='YourFirstWebAssembly'/> Your First WebAssembly

The language for this WebAssembly text format is simply called WebAssembly text format, but the file extension typically used is _.wat,_ so it’s common enough to refer to this language as WAT. It uses S-expressions as its primary syntactic separator, which is helpful for both parsing and readability. S- expressions, known primarily from the Lisp family of languages, are nested lists delimited by parentheses, with whitespace between each item in the list.

To get a feel for this format, let’s implement a simple addition function in WAT.

```js
(module  // 1
	(func $add (param $a i32) (param $b i32) (result i32) // 2
		local.get $a // 3
		local.get $b
		i32.add)
	(export "add" (func $add)) // 4
)
```

1. The first line declares a module. Every WAT file begins with this.
2. We declare a function called _$add_, taking in two 32-bit integers and returning another 32-bit integer.
3. This is the start of the function body, in which we have three statements. The first two grab the function parameters and put them on the stack one after another. Recall that WebAssembly is stack-based. That means many operations will operate on the first (if unary) or first two (if binary) items on the stack. The third statement is a binary “add” operation on i32 values, so it grabs the top two values from the stack and adds them together, putting the result at the top of the stack. The return value for a function is the value at the top of the stack once it completes.
4. In order to use a function outside the module in the host environment, it needs to be exported. Here we export the $add function, giving it the external name add.

We can convert this WAT file to WebAssembly binary by using the _wat2wasm_ tool from the WebAssembly Binary Toolkit (WABT). This can be done with the following one-liner in the _ch7-wasm-add_ directory.

```
$ npx -p wabt wat2wasm add.wat -o add.wasm
```

Now we have our first WebAssembly file! These files aren’t useful outside a host environment, so let’s write a bit of JavaScript to load the WebAssembly and test the add function

```js
const fs = require("fs/promises"); // Needs Node.js v14 or higher.

(async () => {
  const wasm = await fs.readFile("./add.wasm");
  const {
    instance: {
      exports: { add },
    },
  } = await WebAssembly.instantiate(wasm);
  console.log(add(2, 3));
})();
```

Provided you’ve created the _.wasm_ file using the preceding **wat2wasm** command, you should be able to run this in the _ch7-wasm-add_ directory.

```
$ node add.js
```

Simple mathematical operations on the stack don’t make any use of linear memory or of concepts that have no meaning in WebAssembly, such as strings.

Consider strings in C. Effectively, they’re nothing more than a pointer to the start of an array of bytes, terminated by a null byte. We can’t pass whole arrays by value to WebAssembly functions or return them, but we can pass them by reference. This means that to pass a string as an argument, we need to first allocate the bytes in the linear memory and write to them, then pass the index of the first byte to the WebAssembly function.

Hand-writing WebAssembly in WAT, while clearly possible, isn’t usually the easiest path to being productive and getting performance gains with it. It was designed to be a compile target for higher-level languages, and that’s where it really shines.

### <div id='AtomicOperationsWebAssembly'/> Atomic Operations in WebAssembly

The instructions specific to atomic operations on shared memory are key to multithreaded WebAssembly code, whether compiled from another language or hand- written in WAT.

WebAssembly instructions often start with the type. In the case of atomic operations, the type is always _i32_ or _i64_, corresponding to 32-bit and 64-bit integers, respectively. All atomic operations have _.atomic._ next in the instruction name.

Let’s go over some of the atomic operation instructions. We won’t go over exact syntax, but this should give you an idea of the kinds of operations available at the instruction level:

```
[i32|i64].atomic.[load|load8_u|load16_u|load32_u]
```

The load family of instructions is equivalent to Atomics.load() in JavaScript. Using one of the suffixed instructions allows you to load smaller numbers of bits, extending the result with zeros.

```
[i32|i64].atomic.[store|store8|store16|store32]
```

The store family of instructions is equivalent to Atomics.store() in JavaScript. Using one of the suffixed instructions wraps the input value to that number of bits and stores those at the index.

```
[i32|i64].atomic.[rmw|rmw8|rmw16|rmw32].
[add|sub|and|or|xor|xchg|cmpxchg][|_u]
```

The _rmw_ family of instructions all perform read-modify- write operations, equivalent to _add()_, _sub()_, _and()_, _or()_, _xor()_, _exchange()_, and _compareExchange()_ from the _Atomics_ object in JavaScript, respectively. The operations are suffixed with a \_u when they zero-extend, and _rmw_ can have a suffix corresponding to the number of bits to be read.

The next two operations have a slightly different naming convention:

```
memory.atomic.[wait32|wait64]
```

These are equivalent to Atomics.wait() in JavaScript, suffixed according to the number of bits they operate on.

```
memory.atomic.notify
```

This is equivalent to _Atomics.notify()_ in JavaScript.

These instructions are enough to perform the same atomic operations in WebAssembly as we can in JavaScript, but there is an additional operation not available in JavaScript:

```
atomic.fence
```

This instruction takes no arguments and doesn’t return anything. It’s intended to be used by higher-level languages that have ways of guaranteeing ordering of nonatomic accesses to shared memory.

All of these operations are used with the given WebAssembly module’s linear memory, which is the sandbox in which it gets to read and write values. When WebAssembly modules are initialized from JavaScript, they can be initialized with a linear memory provided as an option. This can be backed by a SharedArrayBuffer to enable usage across threads.

### <div id='CompilingCProgramsWebAssembly'/> Compiling C Programs to WebAssembly with Emscripten

Since long before WebAssembly, Emscripten has been the go-to way to compile C and C++ programs for use in JavaScript environments. Today, it supports multithreaded C and C++ code using web workers in browsers and _worker_threads_ in Node.js.

In both Node.js and browsers, Emscripten emulates the system calls used by native code compiled to WebAssembly so that programs written in compiled languages can run without many changes.

### <div id='OtherWebAssemblyCompilers'/> Other WebAssembly Compilers

Emscripten isn’t the only way to compile code to WebAssembly. There are myriad tools for compiling well-known languages to WebAssembly, and there are even some languages built with WebAssembly as the main target in mind, rather than machine code.

_Clang/Clang++_
: The LLVM C-family compilers can target WebAssembly with the -target wasm32-unknown-unknown or -target wasm64-unknown-unknown options, respectively. This is actually what Emscripten is now based on, in which POSIX threads and atomic operations work as expected. At time of writing, this is some of the best support for multithreaded WebAssembly. While clang and clang++ support WebAssembly output, the recommended approach is to use Emscripten, to get the full suite of platform support in browsers and Node.js.

_Rust_
: The Rust website is a great starting point on how to use _rustc_ in this way. To make use of threads, you can use the _wasm-bindgen- rayon crate_, which provides a parallelism API implemented using web workers. At time of writing, Rust’s standard library thread support won’t work.

_AssemblyScript_
: The AssemblyScript compiler takes a subset of TypeScript as input, then generates WebAssembly output. While it does not support spawning threads, it does support atomic operations and using SharedArrayBuffers, so as long as you handle the threads themselves on the JavaScript side via web workers or worker_threads, you can make full use of multithreaded programming in AssemblyScript.

There are, of course, many more options, with new ones arriving all the time. It’s worth having a look around the web to see if your compiled language of choice can target WebAssembly, and whether or not it supports atomic operations in WebAssembly.

### <div id='HiddenThreads'/> AssemblyScript

AssemblyScript is a subset of TypeScript that compiles to WebAssembly. Rather than compiling an existing language and providing implementations of existing system APIs, AssemblyScript was designed as a way to produce WebAssembly code with a much more familiar syntax than WAT.

An AssemblyScript module looks a lot like a TypeScript module. There are built-in types for each of the WebAssembly types. If we wanted to write the same addition module in TypeScript, and assuming 32-bit integers everywhere for types, it would look something like the next code.

```js
export function add(a: i32, b: i32): i32 {
  return a + b;
}
```

Since AssemblyScript files are just TypeScript, they use the _.ts_ extension just the same. To compile a given AssemblyScript file to WebAssembly, we can use the _asc_ command from the _assemblyscript_ module. Try running the following command.

```
$ npx -p assemblyscript asc add.ts --binaryFile add.wasm
```

If you omit the _--binaryFile add.wasm_ you’ll get the module as translated into WAT.

The WAT rendition of the AssemblyScript add function:

```js
(module
	(type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
	(memory $0 0)
	(export "add" (func $add/add))
	(export "memory" (memory $0))
	(func $add/add (param $0 i32) (param $1 i32) (result i32)
		local.get $0
		local.get $1
		i32.add
	)
)
```

AssemblyScript doesn’t provide the ability to spawn threads, but threads can be spawned in the JavaScript environment, and _SharedArrayBuffers_ can be used for the WebAssembly memory. Most importantly, it supports atomic operations via a _global atomics_ object, not particularly different from regular JavaScript’s _Atomics_. The main difference is that rather than operating on a _TypedArray_, these functions operate on the linear memory of the WebAssembly module, with a pointer and an optional offset.

To see this in action, let’s create one more implementation of our Happycoin example.

### <div id='HappycoinAssemblyScript'/> Happycoin in AssemblyScript

In a real-world application, you’d want to take advantage of shared memory and atomic operations, but to keep things simple, we’ll stick with just fanning the work out to the threads.

Let’s begin by creating a directory called _ch7-happycoin-as_ and switch to that directory. We’ll initialize a new project and add some necessary dependencies as follows:

```
$ npm init -y
$ npm install assemblyscript
$ npm install @assemblyscript/loader
```

The _assemblyscript_ package includes the AssemblyScript compiler, and the _assemblyscript/loader_ package gives us handy tools for interacting with the built module.

In the scripts object in the newly created package.json, we’ll add "build" and "start" properties to simplify the compilation and running of the program:

```
"build": "asc happycoin.ts --binaryFile happycoin.wasm --exportRuntime",
"start": "node --no-warnings --experimental-wasi-unstable-preview1 happycoin.mjs"
```

The additional _--exportRuntime_ parameter gives us some high-level tools for interacting with values from AssemblyScript.

When invoking Node.js in the _"start"_ script, we pass the experimental WASI flag. This enables the WebAssembly System Interface (WASI) interface, giving WebAssembly access to system-level functionality that would otherwise be inaccessible. We’ll use this from AssemblyScript to generate random numbers. Because it’s experimental at time of writing, we’ll add the _--no-warnings flag2_ to suppress the warning we get for using WASI. The experimental status also means the flag may change in the future.

Now, let’s write some AssemblyScript!

```ts
import "wasi"; // 1
const randArr64 = new Uint64Array(1);
const randArr8 = Uint8Array.wrap(randArr64.buffer, 0, 8); // 2
function random64(): u64 {
  crypto.getRandomValues(randArr8); // 3
  return randArr64[0];
}

function sumDigitsSquared(num: u64): u64 {
  let total: u64 = 0;
  while (num > 0) {
    const numModBase = num % 10;
    total += numModBase ** 2;
    num = num / 10;
  }
  return total;
}

function isHappy(num: u64): boolean {
  while (num != 1 && num != 4) {
    num = sumDigitsSquared(num);
  }
  return num === 1;
}

function isHappycoin(num: u64): boolean {
  return isHappy(num) && num % 10000 === 0;
}

export function getHappycoins(num: u32): Array<u64> {
  const result = new Array<u64>();
  for (let i: u32 = 1; i < num; i++) {
    const randomNum = random64();
    if (isHappycoin(randomNum)) {
      result.push(randomNum);
    }
  }
  return result;
}
```

1. The _wasi_ module is imported here to ensure that the appropriate WASI-enabled globals are loaded.
2. We initialized a _Uint64Array_ for our random numbers, but _crypto.getRandomValues()_ only works with _Uint8Array_, so we’ll create one of those here as a view on the same buffer. Also, the _TypedArray_ constructors in AssemblyScript aren’t overloaded, so instead there’s a static _wrap()_ method available to construct new _TypedArray_ instances from _ArrayBuffer_ instances.
3. This method is the one we enabled WASI for.

Note that the return value of the exported function is of type _Array\<u64\>_. Exported functions in WebAssembly can’t return arrays of any kind, but they can return an index into the module’s memory (a pointer, really), which is exactly what’s happening here. We could deal with this manually, but as we’ll see, the AssemblyScript loader makes it much easier.

Of course, since AssemblyScript doesn’t provide a way of spawning threads on its own, we’ll need to do that from JavaScript. For this example, we’ll use ECMAScript modules to take advantage of top-level _await_, so go ahead and put the next content into a file called _happycoin.mjs_.

```js
import { WASI } from  'wasi'; // 1
import fs from  'fs/promises';
import loader from  '@assemblyscript/loader';
import { Worker, isMainThread, parentPort } from  'worker_threads';

const THREAD_COUNT =  4;

if (isMainThread) {
	let inFlight = THREAD_COUNT;
	let count =  0;
	for (let i =  0; i < THREAD_COUNT; i++) {
		const worker =  new  Worker(new  URL(import.meta.url)); // 2
		worker.on('message', msg  => {
			count += msg.length; process.stdout.write(msg.join(' ') +  ' ');
			if (--inFlight ===  0) {
				process.stdout.write('\ncount '  + count +  '\n');
			}
		});
	}
```

1. This can’t be done without the _--experimental-wasi-unstable-preview1 flag_.
2. If you’re new to ESM, this might look strange. We don’t get the _\_\_filename_ variable available to us like we do in CommonJS modules. Instead the _import.meta.url_ property gives us the full path as a file URL string. We need to pass that to the _URL_ constructor for it to be usable as an input to the _Worker_ constructor.

Adapted from _“Happycoin: Revisited”_, we’re again checking whether we’re in the main thread or not, and spawning four worker threads from the main thread. In the main thread, we’re expecting only one message on the default _MessagePort_, containing an array of found Happycoins.

On the _else_ side, in the worker threads, we initialize a WASI instance to pass to the WebAssembly module, and then instantiate the module using _@assemblyscript/loader_, giving us what we need to handle the array return value we get from the _getHappycoins_ function. We call the _getHappycoins()_ method exported by the module, which gives us a pointer to an array in the WebAssembly linear memory. The _\_\_getArray_ function, provided by the loader, converts that pointer into a JavaScript array, which we can then use as normal. We pass that to the main thread for output.

To run this example, run the following two commands.

```
$ npm run build
$ npm start
```

As with all of these solutions, it’s important to evaluate the trade-offs made with proper benchmarks. As an exercise, try timing this example against the other Happycoin implementations in this book. Is it faster or slower? Can you figure out why? What improvements can be made?
