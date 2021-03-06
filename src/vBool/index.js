const v_base = require("../v_base");

class vBool extends v_base {
  constructor(value) {

    super(value);

    this.options = [true, false];

    this.accepts = (value) => {
      return (this.options.indexOf(value) > -1) ? true : false;
    };

    this.set = (value) => {
      if (typeof value !== 'undefined' && this.accepts(value)) {
        this._value = value;
        return true;
      }
      return false;
    };
  }
}

module.exports = vBool;
