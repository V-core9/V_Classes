class v_base {
  constructor(value) {

    this._v_uid = this.constructor.name + "_" + Date.now();
    this._type = this.constructor.name;
    this._created_timestamp = Date.now();
    this._updated_timestamp = 0;
    this._value = this.set( value );

    this.type = () => {
      return this._type;
    };

    this.get = () => {
      return this._value;
    };

    this.set = (settingVal) => {
        this._value = settingVal;
        this._updated_timestamp = Date.now();
    };

  }
}

module.exports = v_base;
