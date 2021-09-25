const vTimeStamp = require("../../classes/vTimeStamp");


function trow_vSystemError ( msg = null) {
    var timeOf = (typeof vTimeStamp !== 'undefined') ? vTimeStamp() : Date.now();
    console.warn("Error Type: vSys_Error \nMessage: " + msg + "\nTimeStamp: " + timeOf );
}

module.exports = trow_vSystemError;
