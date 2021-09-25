const vBase = require("./index")

var demoBase = new vBase();

console.log(demoBase);

demoBase.type();
demoBase.creationTime();
demoBase.value();
demoBase.get();
demoBase.set(0);


var demoBase2 = new vBase(154);

console.log(demoBase2);

demoBase2.type();
demoBase2.creationTime();
demoBase2.value();
demoBase2.get();
demoBase2.set(999);
demoBase2.updatedTime();
demoBase2.get();
demoBase2.value();
