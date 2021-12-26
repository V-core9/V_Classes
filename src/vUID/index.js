const v_base = require("../v_base");
const { randomString } = require('../helpers');

//? vUID class constructor
class vUID extends v_base {

  constructor() {
    super();

    //* Generated so it's not possible directly to set it...just generate a new one in your app.
    this.set = async () => {
      //console.log("WARNING: vUID can not be set manually");
      return false;
    };

    //* Actually generate it 
    this._value = `${this.type()}_${Date.now()}_${randomString(12)}`;
  }
}

//? This is a function that utilizes class to create single UID value and pops it back.
v_uid = async () => {
  var helper = new vUID();
  return await helper.get();
};

module.exports = { vUID, v_uid };
