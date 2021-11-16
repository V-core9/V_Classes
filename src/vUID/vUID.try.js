const {vUID, v_uid} = require('.');
var demoV_UID = new vUID();

console.log(demoV_UID);

//? Is still [undefined] -----
console.log(demoV_UID);
console.log(demoV_UID.set(1));
console.log(demoV_UID.get());
console.log(demoV_UID.set('asd'));
console.log(demoV_UID.get(11));

//* Now set to [true] -----
console.log(demoV_UID.set(true));
console.log(demoV_UID.get());

//* Now set to [true] -----
console.log(demoV_UID.type(true));
console.log(demoV_UID.type());

//* Now set to [true] -----
console.log(demoV_UID.set(true));
console.log(demoV_UID.get());


console.log(v_uid());
