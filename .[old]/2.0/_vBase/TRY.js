const vBase = require("./index");

var demoBase = new vBase();

console.log(demoBase);

console.log(demoBase.type());
console.log(demoBase.creationTime());
console.log(demoBase.value());
console.log(demoBase.get());
console.log(demoBase.set(0));


var demoBase2 = new vBase(154);

console.log(demoBase2);

console.log(demoBase2.type());
console.log(demoBase2.creationTime());
console.log(demoBase2.value());
console.log(demoBase2.get());
console.log(demoBase2.set(999));
console.log(demoBase2.updatedTime());
console.log(demoBase2.get());
console.log(demoBase2.value());
