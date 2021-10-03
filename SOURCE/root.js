import {getLCP, getFID, getCLS} from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);


const vDebuggerGUI = require("./components/v_debugger_gui")
import "../PUBLIC/style/v_debugger_gui.css";
const browser_reloader = require("../_dev/auto_browser_refresh/client.browser_reloader");
import "../PUBLIC/style/dev_tests.css";
import "../PUBLIC/style/demo_debugger_0.1.css";

const _is_top_window = require("./functions/__is-/is_top_window")


const welcomePage = require('./components/demo_debugger_0.1')


var vApp = {
  printPage() {
  },
  init() {
    console.log("YEAAA vClasses Init()");
    _is_top_window();
    document.querySelector("html").setAttribute("type", "v_page");
    document.documentElement.insertAdjacentHTML("beforeend", `<v_root></v_root>`);
    document.querySelector("v_root").insertAdjacentHTML("beforeend", `<v_page></v_page>`);
    vDebuggerGUI();
    browser_reloader.addGui();
    welcomePage();
    
    
    return true;
  }

};

vApp.init();  

(() => {
  if (typeof window.vPageLoadStartTime !== 'undefined') console.info("Load Start Time: " + window.vPageLoadStartTime);
})();


console.info("Load Start Time: " + window.vPageLoadStartTime);
