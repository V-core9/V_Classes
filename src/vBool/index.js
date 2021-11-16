const v_base = require("../v_base");

class vBool extends v_base {

  constructor(vIN) {
    super(vIN);

    this.options = [true, false];

    this.accepts = (inVal) => {
      return (this.options.indexOf(inVal) > -1) ? true : false;
    };

    this.set = (vIN) => {
      if (typeof vIN !== 'undefined' && this.accepts(vIN)) {
        this._value = vIN;
        return true;
      }
      return false;
    };
  }
}

module.exports = vBool;
