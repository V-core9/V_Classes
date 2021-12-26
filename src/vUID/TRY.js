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

console.log(v_uid());

console.log(v_uid());

console.log(v_uid());


var resItems = [];

const TRY = {
  testCount : 1000000,
  test : async () => {
    const start_time = Date.now();

    for(let i = 0; i < TRY.testCount; i++) {
        resItems.push( await v_uid());
    }
    const end_time = Date.now();
    const execTime = end_time - start_time;
    const avgExecTime = execTime / TRY.testCount;
    const perMS = Math.trunc(1/avgExecTime);

    console.log( "Stats:  [ "+TRY.testCount+" ][ execTime: "+execTime/1000+"s | AVG_execTime: "+avgExecTime+" ms/uid()  | AVG_GenCount: "+ perMS +" uid()/ms ]");
    
  },

};

TRY.test();
