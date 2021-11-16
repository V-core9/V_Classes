v_uid = (cName) => {
  return `${cName}_${Date.now()}`;
};

class v_base {
  constructor(value) {

    this._type = this.constructor.name;
    this._v_uid = v_uid(this._type);
    this._created_timestamp = Date.now();
    this._updated_timestamp = 0;
    this._value = value;

    this.type = () => {
      return this._type;
    };

    this.get = () => {
      return this._value;
    };

    this.set = (settingVal) => {
      try {
        if (typeof settingVal === 'undefined') return false;
        this._value = settingVal;
        this._updated_timestamp = Date.now();
        return true;
      } catch (error) {
        return false;
      }
    };

  }
}

module.exports = v_base;
