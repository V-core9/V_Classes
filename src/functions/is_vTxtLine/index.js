
var vTxtLine = require("../../classes/vTxtLine")
//-+----------------------------------------------
// | and the "is_vTxtLine() " checkup function 
//-+----------------------------------------------
function is_vTxtLine(testItem) {
  return testItem.constructor === vTxtLine;
}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

module.exports = is_vTxtLine;
