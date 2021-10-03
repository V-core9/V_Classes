const vBase = require("../_vBase");

const vBoolAccepts = [true, false];

class vBool extends vBase {
  constructor(vIN = null) {
    super(vIN);

    this.accepts = (accIN) => {
      return vBoolAccepts.includes(accIN);
    }
    
    this.updateValue(vIN);
  }
}

module.exports = vBool;
