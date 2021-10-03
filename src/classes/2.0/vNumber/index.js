const vBase = require("../_vBase");

const vNumberAccepts = (item) => {
  return !isNaN(item);
};

class vNumber extends vBase {
  constructor(vIN = null) {
    super(vIN);

    this.accepts = (accIN) => {
      return vNumberAccepts(accIN);
    }
    
    this.updateValue(vIN);
  }
}

module.exports = vNumber;
