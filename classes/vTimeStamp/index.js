// ____________________________________________________________________________
//<[ 1. vTimeStamp ()  >> Function Class Constructor                                  ]>----
// [------------------->> declaration using a function that creates an object ]>----
function vTimeStamp () {
	  this._tmsp =  Date.now() ;
    
    this.type = () => {
    	return this.constructor.name;
    }
    
    this.val = () => {
    	return this._tmsp;
    }
    
    return this._tmsp;
};
//-+---------------------------------------------

module.exports = vTimeStamp;
