const vNumber = require('.');
var vNumber01 = new vNumber();


//? Is still [undefined] -----
console.log(vNumber01);
console.log(vNumber01.set(1));
console.log(vNumber01.get());
console.log(vNumber01.set('asd'));
console.log(vNumber01.get(11));

//* Now set to [true] -----
console.log(vNumber01.set(true));
console.log(vNumber01.get());


//* Now set to [true] -----
console.log(vNumber01.type(11));
console.log(vNumber01.type(true));
console.log(vNumber01.type());

//* Now set to [false] -----
console.log(vNumber01.set(false));
console.log(vNumber01.get(true));
console.log(vNumber01.get());
