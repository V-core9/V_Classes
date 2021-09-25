// ____________________________________________________________________________
//<[ 2. vTimeStamp ()  >> Function Class Constructor                          ]>----
// [------------------->> declaration using a function that creates an object ]>----
function vTxtLine ( txtToUse ) {
	  this._txtLine = txtToUse;
    
    this.type = () => {
    	return this.constructor.name;
    }
    
    this.val = () => {
    	return this._txtLine;
    }
    
    return this._txtLine;
};
//-+----------------------------------------------

module.exports = vTxtLine;
