namespace App {
  // autobind decorator
  export function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    //recieves the target, method's name and propertyDescriptor
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalMethod.bind(this); // 'this' refers to the whatever is responsible to get the method
        return boundFn;
      },
    };
    return adjDescriptor;
  }
}
