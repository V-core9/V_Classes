// ____________________________________________________________________________
//<[ 2. vTimeStamp ()  >> Function Class Constructor                          ]>----
// [------------------->> declaration using a function that creates an object ]>----
function vTxtLine ( txtToUse  = null ) {
	this._text = txtToUse;
    
    this.type = () => {
    	return this.constructor.name;
    }
    
    this.val = () => {
    	return this._text;
    }
    
    return this._text;
};
//-+----------------------------------------------

module.exports = vTxtLine;
