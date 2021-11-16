const vBool = require('.');
var vBool01 = new vBool();


//? Is still [undefined] -----
console.log(vBool01);
console.log(vBool01.set(1));
console.log(vBool01.get());
console.log(vBool01.set('asd'));
console.log(vBool01.get(11));

//* Now set to [true] -----
console.log(vBool01.set(true));
console.log(vBool01.get());


//* Now set to [true] -----
console.log(vBool01.type(11));
console.log(vBool01.type(true));
console.log(vBool01.type());

//* Now set to [false] -----
console.log(vBool01.set(false));
console.log(vBool01.get(true));
console.log(vBool01.get());
