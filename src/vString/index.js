const v_base = require("../v_base");

class vString extends v_base {
  constructor(value) {

    super(value);

    this.accepts = (value) => {
      return (typeof value === "string" || typeof value === "number");
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

module.exports = vString;
