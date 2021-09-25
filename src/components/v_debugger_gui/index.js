const vDebuggerGUI = {
  config: {
    gui_root_tag: 'v_debugger_root',
    gui_header_tag: 'v__header',
    gui_content_tag: 'v__root_main',
    gui_footer_tag: 'v__footer',
    title: "V_Debugger",
  },
  options: {
     gui_shown: false,
  },
  data: {
      gui_added: false,
  },
  toggleGuiShown() {
    this.options.gui_shown = !this.options.gui_shown;
    document.querySelector(this.config.gui_root_tag).setAttribute("gui_shown", this.options.gui_shown);
  },
  addGuiFooter() {
    document.querySelector(this.config.gui_root_tag).insertAdjacentHTML('beforeend',`<${this.config.gui_footer_tag}>${this.config.gui_footer_tag}</${this.config.gui_footer_tag}>`)
  },
  addGuiContent() {
    document.querySelector(this.config.gui_root_tag).insertAdjacentHTML('beforeend',`<${this.config.gui_content_tag}><v_code>${JSON.stringify(this, true, 2)}</v_code></${this.config.gui_content_tag}>`)
  },
  addGuiHeader() {
    document.querySelector(this.config.gui_root_tag).insertAdjacentHTML('afterbegin', `<${this.config.gui_header_tag}><title>${this.config.title}</title><v_btn left_mouse='toggleDebugger'>Toggle Debugger</v_btn></${this.config.gui_header_tag}>`);
    document.querySelector("v_btn[left_mouse='toggleDebugger']").addEventListener('click', (event) => {
      vDebuggerGUI.toggleGuiShown();
    })
  },
  addGuiBase() {
    document.body.insertAdjacentHTML('beforeend',`<${this.config.gui_root_tag}></${this.config.gui_root_tag}>`)
  },
  init() {
    if (this.status != true) {
      this.addGuiBase();
      this.addGuiHeader();
      this.addGuiContent();
      this.addGuiFooter();
      this.data.gui_added = true;
    } else {

    }
  }
}

vDebuggerGUI.init();

module.exports = vDebuggerGUI;
