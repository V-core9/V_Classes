const v_base = require("../v_base");

//? vUID class constructor
class vUID extends v_base {

  constructor(inVal = 'vUID') {
    super();

    //* Generated so it's not possible directly to set it...just generate a new one in your app.
    this.set = () => {
      //console.log("WARNING: vUID can not be set manually");
      return false;
    };

    //* Actually generate it 
    this._value = `${inVal}_${Date.now()}`;
  }
}

//? This is a function that utilizes class to create single UID value and pops it back.

v_uid =()=>{
  var helper = new vUID();
  return helper.get();
};

module.exports = {vUID, v_uid};
