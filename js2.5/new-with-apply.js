function Greeting(name) {
    this.name = name;
  } 

function construct(constructor, ...args) {
    const obj = Object.create(constructor.prototype);
    constructor.apply(obj, args);
    return obj;
  }
  let great=construct(Greeting,"gokul");
  console.log(great);
  