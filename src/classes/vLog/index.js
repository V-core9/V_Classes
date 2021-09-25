var vTimeStamp = require("../../classes/vTimeStamp")
var vTxtLine = require("../../classes/vTxtLine")
var trow_vSystemError = require("../../functions/trow_vSystemError")
// ____________________________________________________________________________
//<[ 3. vLog ()        >> Function Class Constructor                          ]>----
// [------------------->> declaration using a function that creates an object ]>----
function vLog ( msgToAdd = null ) {
	this._timestamp = new vTimeStamp();
	this._txtLine   = new vTxtLine( msgToAdd );
    
    this.type = () => {
    	return this.constructor.name;
    };
    
    this.val = () => {
    	return this._txtLine.val() + " :@: " + this._timestamp.val();
    };
    
    if (this === window) {
        trow_vSystemError("Function Class Constructor Missing data.");
        return ;
    } 
    return this;
};
//-+---------------------------------------------

module.exports = vLog;
