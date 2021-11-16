const vBase = require("../_vBase");

class vBool extends vBase {
  constructor(vIN) {
    super(vIN);

    this.options = [true, false];

    this.accepts = (accIN) => {
      return this.options.includes(accIN);
    };
    
    this.updateValue(vIN);
  }
}

module.exports = vBool;
