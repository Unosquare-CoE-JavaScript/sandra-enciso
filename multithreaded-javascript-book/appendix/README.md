### <div id='Appendix'/> Appendix. Structured Clone Algorithm

The structured clone algorithm is a mechanism that JavaScript engines use when copying objects using certain APIs. Most notably, it’s used when passing data between workers. With this mechanism, data is serialized and then later deserialized as an object inside another JavaScript realm.

When objects are cloned in this manner modifying an object on one side will not affect the object on the other side. There are essentially two copies of the data now. The purpose of the structured clone algorithm is to provide a friendlier mechanism for developers than what _JSON.stringify_ does, while imposing reasonable limitations.

Browsers use the structured clone algorithm when copying data between web workers. Node.js, similarly, uses it when copying data between worker threads. When you see a .postMessage() call, data being passed in is cloned in this way. Browsers and Node.js follow the same rules, but they each support additional object instances that can be copied.

Any data that can be cleanly represented as JSON can be safely cloned in this manner. That said, the structured clone algorithm supports several other types of data as well.

First off, all of the primitive data types available in JavaScript, with the exception of the Symbol type, can be represented.

Instances of _Array_, _Map_, and _Set_, which are each used for storing collections of data, can also be cloned in this manner. Even _ArrayBuffer_, _ArrayBufferView_, and _Blob_ instances, which store binary data, can be passed along.

Instances of some more complex objects, as long as they are quite universal and well understood, can also be passed through. This includes objects created using the _Boolean_ and _String_ constructor, _Date_, and even _RegExp_ instances.

On the browser side, more complex and lesser-known object instances like those for _File_, _FileList_, _ImageBitmap_, and _ImageData_ can be cloned.

On the Node.js side, special object instances that can be copied over include _WebAssembly.Module_, _CryptoKey_, _FileHandle_, _Histogram_, _KeyObject_, _MessagePort_, _net.BlockList_, _net.SocketAddress_, and _X509Certificate_. Even instances of _ReadableStream_, _WritableStream_, and _TransformStream_ can be copied.

Another notable difference that works with the structured clone algorithm, but doesn’t work with JSON objects, is that recursive objects (those with nested properties that reference another property) can also be cloned. The algorithm is smart enough to stop serializing an object once it encounters a duplicate, nested object.

A function cannot be cloned in this manner. Functions can be pretty complex things. DOM elements in the browser cannot be passed along. You’ll need to have a web worker return a value that the main JavaScript realm is then able to transform and display to the user.

Objects in JavaScript are fairly complex. When it comes to the structured clone algorithm, only the basic values of objects are retained.

When you define a class of your own and pass an instance to be cloned, only the own properties of that instance will be cloned, and the resulting object will be an instance of Object. Properties defined in the prototype will not be cloned either.

Certain objects will entirely refuse to be cloned. For example, if you try to pass _window_ from the main thread to a worker thread, or if you try to return _self_ in the opposite direction, you may receive one of the following errors, depending on the browser:

```
Uncaught DOMException: The object could not be cloned.
DataCloneError: The object could not be cloned.
```

There are some inconsistencies across JavaScript engines, so it’s best to test your code in multiple browsers. For that reason, passing around simpler data is usually best.
