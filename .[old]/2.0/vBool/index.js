const vBase = require("../_vBase");

class vBool extends vBase {
  constructor(value) {
    super(value);

    this.options = [true, false];

    this.accepts = (value) => {
      return this.options.includes(value);
    };
    
    this.updateValue(value);
  }
}

module.exports = vBool;
