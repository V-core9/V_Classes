const vDebuggerGUI = require("./components/v_debugger_gui")
import "../dist/style/v_debugger_gui.css";
const browser_reloader = require("./auto/browser_reload");
import "../dist/style/dev_tests.css";
import "../dist/style/demo_debugger_0.1.css";


const welcomePage = require('./components/demo_debugger_0.1')


var vApp = {
  printPage() {
    welcomePage();
  },
  init() {
    console.log("YEAAA vClasses Init()");
    document.querySelector("html").setAttribute("type", "v_page");
    document.documentElement.insertAdjacentHTML("beforeend", `<v_root></v_root>`);
    document.querySelector("v_root").insertAdjacentHTML("beforeend", `<v_page></v_page>`);
    vDebuggerGUI();
    browser_reloader.addGui();
    this.printPage();
    return true;
  }

};

vApp.init();  

(() => {
  if (typeof window.vPageLoadStartTime !== 'undefined') console.info("Load Start Time: " + window.vPageLoadStartTime);
})();


console.info("Load Start Time: " + window.vPageLoadStartTime);
