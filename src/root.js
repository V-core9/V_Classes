const vDebuggerGUI = require("./components/v_debugger_gui")
import "../dist/style/v_debugger_gui.css";
const browser_reloader = require("./auto/browser_reload");
browser_reloader.addGui("v__root_main");
import "../dist/style/dev_tests.css";

var vApp = {

  init : () => {
    console.log("YEAAA vClasses Init()");
    return true;
  }

};

vApp.init();  

(() => {
  if (typeof window.vPageLoadStartTime !== 'undefined') console.info("Load Start Time: " + window.vPageLoadStartTime);
})();


console.info("Load Start Time: " + window.vPageLoadStartTime);
