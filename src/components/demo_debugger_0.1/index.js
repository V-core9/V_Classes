const welcomePage =() => {
    this.elemId = "aoDevToolsPanel";
    this.title = `<svg width="60" height="60" viewBox="0 0 33 33">
  <polygon class="triangle" fill="none" stroke="#58f311" stroke-width="1" points="16,1 32,32 1,32" />
</svg><h2>/<span>V_Debugger</span>/ Welcome Page<span class='blink'>_</span></h2>`;
    this.content = `<div class='half'><img src="https://cdn0.iconfinder.com/data/icons/web-development-47/64/demo-web-design-mockup-custom-template-512.png"/></div><div class='half'><h2>Easy way to say WTF is going on...</h2><h1>A^O_Developer Debugging Tool</h1></div>`;
    this.footer = `<p>A^O_DevTools - 2021</p>`;
    this.mainLayout = `<div id='aoDevToolsPanel' class="ao_panel">
  <div class="panel_title"></div>
  <div class="panel_content"></div>
  <div class="panel_footer"></div>
</div>`;
  this.print = () => {
    document.querySelector("v_page").insertAdjacentHTML("afterbegin", this.mainLayout);
    document.querySelector("#" + this.elemId + " .panel_title").innerHTML = this.title + this.content + this.footer;
  };

  this.print();
};


//window.onload = welcomePage.print();

module.exports = welcomePage;
