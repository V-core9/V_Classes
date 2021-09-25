var vTimeStamp = require("../../classes/vTimeStamp")
//-+---------------------------------------------
// | and the "is_vTimeStamp()" checkup function 
//-+---------------------------------------------
function is_vTimeStamp(testItem) {
  return testItem.constructor === vTimeStamp;
}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

module.exports = is_vTimeStamp;
