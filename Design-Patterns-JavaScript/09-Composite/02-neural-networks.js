https://stackoverflow.com/questions/29879267/
/*Code that allows a class to extends to multiple classes */
var aggregation = (baseClass, ...mixins) => {
  class base extends baseClass {
    constructor (...args) {
      super(...args);
      mixins.forEach((mixin) => {
        copyProps(this,(new mixin));
      });
    }
  }
  let copyProps = (target, source) => {  // this function copies all properties and symbols, filtering out some special ones
    Object.getOwnPropertyNames(source)
      .concat(Object.getOwnPropertySymbols(source))
      .forEach((prop) => {
        if (!prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
          Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
      })
  };
  mixins.forEach((mixin) => {
    // outside constructor() to allow aggregation(A,B,C).staticFunction() to be called etc.
    copyProps(base.prototype, mixin.prototype);
    copyProps(base, mixin);
  });
  return base;
};

//Class to conect neurons to neurons or layers, or layers to layers or neurons
class Connectable
{
  connectTo(other)
  {
    for (let from of this)
      for (let to of other)
      {
        from.out.push(to);
        to.in.push(from);
      }
  }
}

/*A class which has a certain number of input and output connections*/
class Neuron extends Connectable
{
  constructor()
  { //The arrays allows us to connect neurons to other neurons.
    super();
    this.in = []; 
    this.out = [];
  }

  // connectTo(other) //specify the other neuron to connect to
  // {
  //   this.out.push(other);
  //   other.in.push(this);
  // }

  toString()
  {
    return `A neuron with ${this.in.length} inputs ` +
      `and ${this.out.length} outputs`;
  }

  //Making Neuron iterable
  /*The well-known Symbol.iterator symbol specifies the default iterator for an object. Used by for...of. */
  [Symbol.iterator]()
  {
    let returned = false;
    return {
      next: () => ({
        value: this,
        done: returned++ //When you do a plus plus on a false, it becomes true
      })
    }
  }
}

/* NeuronLayer is a collection of neurons. And we can connect one layer to another layer or another neuron */
// multiple inheritance is impossible, so...
class NeuronLayer extends aggregation(Array, Connectable) //Extends to an array and Connectable class
{
  constructor(count)
  {
    super();
    while (count --> 0) //while count goes to zero, going to push 
      this.push(new Neuron());
  }

  toString()
  {
    return `A layer with ${this.length} neurons`;
  }
}

let neuron1 = new Neuron();
let neuron2 = new Neuron();
let layer1 = new NeuronLayer(3);
let layer2 = new NeuronLayer(4);

neuron1.connectTo(neuron2);
neuron1.connectTo(layer1);
layer2.connectTo(neuron1);
layer1.connectTo(layer2);

console.log(neuron1.toString());
console.log(neuron2.toString());
console.log(layer1.toString());
console.log(layer2.toString());