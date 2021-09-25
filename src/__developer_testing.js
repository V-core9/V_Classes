var vTimeStamp = require("./classes/vTimeStamp")
var vTxtLine = require("./classes/vTxtLine")
var vLog = require("./classes/vLog")

var trow_vSystemError = require("./functions/trow_vSystemError")

var typeOf = require("./functions/is_vTimeStamp")
var is_vTimeStamp = require("./functions/is_vTimeStamp")
var is_vTxtLine = require("./functions/is_vTimeStamp")
var is_vLog = require("./functions/is_vTimeStamp")
  


console.clear();

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
console.log(vTxtLine());


import "./dev_tests.css";
