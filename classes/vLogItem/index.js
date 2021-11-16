var vTimeStamp = require("../vTimeStamp");
var vTxtLine = require("../vTxtLine");
var trow_vSystemError = require("../../functions/trow_vSystemError");
// ____________________________________________________________________________
//<[ 3. vLogItem ()        >> Function Class Constructor                          ]>----
// [------------------->> declaration using a function that creates an object ]>----
function vLogItem ( msgToAdd  ) {
    if (this === window) {
        trow_vSystemError("Function Class Constructor Missing data.");
        return ;
    } else {

      this._tmsp = new vTimeStamp();
      this._txtLine   = new vTxtLine( msgToAdd );
      
      this.type = () => {
        return this.constructor.name;
      };
      
      this.val = () => {
        return this;
      };
    
      console.log( this );
    
      return this;
    }
};
//-+---------------------------------------------

module.exports = vLogItem;
