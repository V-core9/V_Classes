const vBool = require("./index");


var demoBool = new vBool(true);

console.log(demoBool);

console.log(demoBool.type());
console.log(demoBool.creationTime());
console.log(demoBool.value());
console.log(demoBool.get());
console.log(demoBool.set(0));

demoBool.type();
demoBool.creationTime();

demoBool.get();
demoBool.value();
demoBool.set(false);

console.log(demoBool);

console.log(demoBool.type());
console.log(demoBool.creationTime());
console.log(demoBool.value());
console.log(demoBool.get());
console.log(demoBool.set());
console.log(demoBool.set(0));


var demoOoBOO = new vBool(true);
