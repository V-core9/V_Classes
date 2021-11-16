
const vLogItem = require("../../classes/vLogItem")
const vTxtLine = require("../../classes/vTxtLine")
// ____________________________________________________________________________
//<[ 0. vLog() >> Function returns constructor name of provided object      ]>----
// [------------------->> this one is universal for most/all of the classes   ]>----
function vLog(msgToLog = vTxtLine) {
  try {
    var messageToLog = new vLogItem(msgToLog);
    return messageToLog;
  } catch (err) {
    console.warn("function vLog() : " + JSON.stringify(err));
    return err;
  }
}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

module.exports = vLog;
