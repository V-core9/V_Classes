
class v_base {
  constructor(val) {

    this._type = this.constructor.name;
    this._value = val;

    this.type = () => {
      return this._type;
    };

    this.get = () => {
      return this._value;
    };

    this.set = (value) => {
      try {
        if (typeof value === 'undefined') return false;
        this._value = value;
        return true;
      } catch (error) {
        return false;
      }
    };
  }
}

module.exports = v_base;
