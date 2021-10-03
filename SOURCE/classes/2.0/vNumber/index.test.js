const vNumber = require("./index");


var demoNumber = new vNumber(89999);

console.log(demoNumber);

console.log(demoNumber.type());
console.log(demoNumber.creationTime());
console.log(demoNumber.value());
console.log(demoNumber.get());
console.log(demoNumber.set(0));

demoNumber.type();
demoNumber.creationTime();

demoNumber.get();
demoNumber.value();
demoNumber.set(false);

console.log(demoNumber);

console.log(demoNumber.type());
console.log(demoNumber.creationTime());
console.log(demoNumber.value());
console.log(demoNumber.get());
console.log(demoNumber.set());
console.log(demoNumber.set(0));


var vNumberOoBOO = new vNumber(true);
