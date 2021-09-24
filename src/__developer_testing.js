console.clear();

function vSystemError ( msg = null) {
    var timeOf = (typeof vTimeStamp !== 'undefined') ? vTimeStamp() : Date.now();
    console.warn("Error Type: vSys_Error \nMessage: " + msg + "\nTimeStamp: " + timeOf );
}

// ____________________________________________________________________________
//<[ 0. typeOf() >> Function returns constructor name of provided object      ]>----
// [------------------->> this one is universal for most/all of the classes   ]>----
function typeOf( objToCheck ) {
  return objToCheck.constructor.name;
}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// ____________________________________________________________________________
//<[ 1. vTimeStamp ()  >> Function Class Constructor                          ]>----
// [------------------->> declaration using a function that creates an object ]>----
function vTimeStamp () {
	this._tmsp = Date.now();
    
    this.type = () => {
    	return this.constructor.name;
    }
    
    this.val = () => {
    	return this._tmsp;
    }
    
    return this._tmsp;
};
//-+---------------------------------------------
// | and the "is_vTimeStamp()" checkup function 
//-+---------------------------------------------
function is_vTimeStamp(testItem) {
  return testItem.constructor === vTimeStamp;
}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

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
// | and the "is_vTxtLine() " checkup function 
//-+----------------------------------------------
function is_vTxtLine(testItem) {
  return testItem.constructor === vTxtLine;
}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

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
        vSystemError("Function Class Constructor Missing data.");
        return ;
    } 
    return this;
};
//-+---------------------------------------------
// | and the "is_vLog()" checkup function 
//-+---------------------------------------------
function is_vLog( testItem ) {
  return testItem.constructor === vLog;
}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=






//-------------------------------------------------------------------
//<[ Sample Usage +>> vTimeStamp () ]---------------------------------
var demoTS = new vTimeStamp();

//<[ Sample Checkups -> Getting type of it and confirming it's type vTimeStamp)() ]------------------------
console.log( "0> is_vTimeStamp(demoTS)               :: "+ is_vTimeStamp(demoTS) +"          "  );
console.log( "0> demoTS.constructor === vTimeStamp   :: "+ (demoTS.constructor === vTimeStamp)  +"          "  );
console.log( demoTS.constructor.name  );
console.log( "0> demoTS.type()                       :: "+ ( demoTS.type() )  +"    "  );
console.log( "0> typeOf( demoTS )                    :: "+ typeOf( demoTS )  +"    "  );

console.log( demoTS );
console.log( demoTS.type() );
console.log( demoTS.val() );
//>=------------------------------------------------

//<[ Sample Usage +>> vLog () ]------------------------
var demoVog = new vLog( "demoVlog Message input");

//<[ Sample Checkups -> Getting type of it and confirming it's type vTimeStamp)() ]------------------------
console.log( "0> is_vLog(vLog)                        :: "+ is_vLog( demoVog ) +"    "  );
console.log( "0> demoVog.constructor === vLog         :: "+ ( demoVog.constructor === vLog )  +"    "  );
console.log( "0> demoVog.constructor.name             :: "+ ( demoVog.constructor.name )  +"    "  );
console.log( "0> demoVog.type()                       :: "+ ( demoVog.type() )  +"    "  );
console.log( "0> typeOf( demoVog )                    :: "+ typeOf( demoVog )  +"    "  );

console.log( demoVog );
console.log( demoVog.type() );
console.log( demoVog.val() );

console.log( (demoVog._timestamp).type() );
console.log( demoVog._timestamp.type() );

console.log( (demoVog._txtLine).type() );
console.log( demoVog._txtLine.type() );

//>=------------------------------------------------

//<[ Sample Usage +>> vTxtLine () ]------------------------
console.info("\n - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
//<[ Sample Usage ]------------------------
var DEMO_vTxtLine = new vTxtLine( "MSI wouldn't let me take it apart at CES this year, but I FINALLY got it in my hands, and now it's time to unveil all of the Vortex G65's dirty little secrets...");

//<[ Sample Checkups -> Getting type of it and confirming it's type vTimeStamp)() ]------------------------
console.log( "0> is_vTxtLine(DEMO_vTxtLine)                 :: "+ is_vTxtLine( DEMO_vTxtLine ) +"        ");
console.log( "0> DEMO_vTxtLine.constructor === vLog         :: "+ ( DEMO_vTxtLine.constructor === vTxtLine )  +"        "  );
console.log( "0> DEMO_vTxtLine.constructor.name             :: "+  DEMO_vTxtLine.constructor.name +"    "  );
console.log( "0> DEMO_vTxtLine.type()                       :: "+ ( DEMO_vTxtLine.type() )  +"    "  );
console.log( "0> typeOf( DEMO_vTxtLine )                    :: "+ typeOf( DEMO_vTxtLine )  +"    "  );

console.log( DEMO_vTxtLine );
console.log( DEMO_vTxtLine.val() );
console.log( DEMO_vTxtLine.type() );
console.log( DEMO_vTxtLine._text );
console.log( typeof DEMO_vTxtLine._text );
//>=------------------------------------------------

console.log( vTimeStamp() );
console.log( vTimeStamp() );
console.log( vTimeStamp() );
console.log( vLog() );
console.log( vLog() );
console.log( vLog() );
console.log( vTxtLine() );
console.log( vTxtLine() );
console.log( vTxtLine() );
