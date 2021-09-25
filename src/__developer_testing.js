const vTimeStamp = require("./classes/vTimeStamp")
const vTxtLine = require("./classes/vTxtLine")
const vLogItem = require("./classes/vLogItem")

const trow_vSystemError = require("./functions/trow_vSystemError")

const typeOf = require("./functions/typeOf")

const vLog = require("./functions/vLog")
const is_vTimeStamp = require("./functions/is_vTimeStamp")
const is_vTxtLine = require("./functions/is_vTimeStamp")
const is_vLog = require("./functions/is_vTimeStamp")
  


console.clear();

//-------------------------------------------------------------------
//<[ Sample Usage +>> vTimeStamp () ]---------------------------------
var DEMO_vTimeStamp = new vTimeStamp();

//<[ Sample Checkups -> Getting type of it and confirming it's type vTimeStamp)() ]------------------------
vLog( "1> is_vTimeStamp(DEMO_vTimeStamp)               :: "+ is_vTimeStamp(DEMO_vTimeStamp) +"          "  );
vLog( "2> DEMO_vTimeStamp.constructor === vTimeStamp   :: "+ (DEMO_vTimeStamp.constructor === vTimeStamp)  +"          "  );
vLog( "3> DEMO_vTimeStamp.constructor.name             :: "+ DEMO_vTimeStamp.constructor.name  );
vLog( "4> DEMO_vTimeStamp.type()                       :: "+ ( DEMO_vTimeStamp.type() )  +"    "  );
vLog( "5> typeOf( DEMO_vTimeStamp )                    :: "+ typeOf( DEMO_vTimeStamp )  +"    "  );
vLog( " 6> (DEMO_vTimeStamp  ).toString()                 :: "+ ( DEMO_vTimeStamp ).toString()  +"    "  );
vLog( " 7> DEMO_vTimeStamp.val()                     :: "+ ( DEMO_vTimeStamp.val() )  +"    "  );
vLog( " 8> DEMO_vTimeStamp.type()                       :: "+ ( DEMO_vTimeStamp.type() )  +"    "  );
//>=------------------------------------------------

//<[ Sample Usage +>> vLog () ]------------------------
var DEMO_vLogItem = new vLogItem( "demoVlog Message input");

//<[ Sample Checkups -> Getting type of it and confirming it's type vTimeStamp)() ]------------------------
vLog( " 1> is_vLog(DEMO_vLogItem)                        :: "+ is_vLog( DEMO_vLogItem ) +"    "  );
vLog( " 2> DEMO_vLogItem.constructor === vLog         :: "+ ( DEMO_vLogItem.constructor === vLog )  +"    "  );
vLog( " 3> DEMO_vLogItem.constructor.name             :: "+ ( DEMO_vLogItem.constructor.name )  +"    "  );
vLog( " 4> DEMO_vLogItem.type()                       :: "+ ( DEMO_vLogItem.type() )  +"    "  );
vLog( " 5> typeOf( DEMO_vLogItem )                    :: "+ typeOf( DEMO_vLogItem )  +"    "  );
vLog( " 6> (DEMO_vLogItem  ).toString()                 :: "+ ( DEMO_vLogItem ).toString()  +"    "  );
vLog( " 7> DEMO_vLogItem._txtLine                   :: "+  DEMO_vLogItem._txtLine  +"    "  );
vLog( " 8> DEMO_vLogItem.val()                     :: "+ ( DEMO_vLogItem.val() )  +"    "  );
vLog( " 9> DEMO_vLogItem.type()                     :: "+ ( DEMO_vLogItem.type() )  +"    "  );
vLog( "10> (DEMO_vLogItem._tmsp).type()                     :: "+ ( (DEMO_vLogItem._tmsp).type() )  +"    "  );
vLog( "11> DEMO_vLogItem._tmsp.type()                     :: "+ ( DEMO_vLogItem._tmsp.type() )  +"    "  );
vLog( "12> (DEMO_vLogItem._txtLine).type()                     :: "+ ( (DEMO_vLogItem._txtLine).type() )  +"    "  );
vLog( "13> DEMO_vLogItem._txtLine.type()                     :: "+ ( DEMO_vLogItem._txtLine.type() )  +"    "  ); 

//>=------------------------------------------------


//<[ Sample Usage ]------------------------
var DEMO_vTxtLine = new vTxtLine( "MSI wouldn't let me take it apart at CES this year, but I FINALLY got it in my hands, and now it's time to unveil all of the Vortex G65's dirty little secrets...");

//<[ Sample Checkups -> Getting type of it and confirming it's type vTimeStamp)() ]------------------------
vLog( "1> is_vTxtLine(DEMO_vTxtLine)                 :: "+ is_vTxtLine( DEMO_vTxtLine ) +"        ");
vLog( "2> DEMO_vTxtLine.constructor === vLog         :: "+ ( DEMO_vTxtLine.constructor === vTxtLine )  +"        "  );
vLog( "3> DEMO_vTxtLine.constructor.name             :: "+  DEMO_vTxtLine.constructor.name +"    "  );
vLog( "4> DEMO_vTxtLine.type()                       :: "+ ( DEMO_vTxtLine.type() )  +"    "  );
vLog( " 5> typeOf( DEMO_vTxtLine )                    :: "+ typeOf( DEMO_vTxtLine )  +"    "  );
vLog( " 6> (DEMO_vTxtLine  ).toString()                 :: "+ ( DEMO_vTxtLine ).toString()  +"    "  );
vLog( " 5> (DEMO_vTxtLine.val()  ).toString()                 :: "+ ( DEMO_vTxtLine.val() ).toString()  +"    "  );
vLog( " 8> DEMO_vTxtLine.val()                     :: "+ ( DEMO_vTxtLine.val() )  +"    "  );
vLog( " 9> DEMO_vTxtLine.type()                     :: "+ ( DEMO_vTxtLine.type() )  +"    "  );
//>=------------------------------------------------


vLog( vTimeStamp() );
vLog(  (vTimeStamp).toString()  );
vLog(  (vTxtLine).toString()  );
vLog(  (vLogItem).toString()  );
vLog(  (DEMO_vTimeStamp).toString()  );
vLog(  (DEMO_vTxtLine).toString()  );
vLog(  (DEMO_vLogItem).toString()  );
vLog( vTimeStamp  );
vLog( JSON.stringify( vTxtLine ) );
vLog( JSON.stringify( vLogItem ) );
vLog( JSON.stringify( DEMO_vTimeStamp ));
vLog( JSON.stringify( DEMO_vTxtLine ) );
vLog( JSON.stringify( DEMO_vLogItem ));
vLog(DEMO_vTimeStamp);
vLog(DEMO_vTxtLine);
vLog(DEMO_vLogItem);


const browser_reloader = require("./auto/browser_reload");

import "../dist/style/dev_tests.css";
