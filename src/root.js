const vClasses = () => {

  this.init = () => {
    console.log("YEAAA vClasses Init()");
    return true;
  }

  return this.init();
};

vClasses();

(() => {
  if (typeof window.vPageLoadStartTime !== 'undefined') console.info("Load Start Time: " + window.vPageLoadStartTime);
})();
