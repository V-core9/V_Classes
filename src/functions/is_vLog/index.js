//-+---------------------------------------------
// | and the "is_vLog()" checkup function 
//-+---------------------------------------------
function is_vLog( testItem ) {
  return testItem.constructor === vLog;
}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

module.exports = is_vLog;
