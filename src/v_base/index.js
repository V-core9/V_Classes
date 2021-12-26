
class v_base {
  constructor(value) {

    this._type = this.constructor.name;

    this.type = async () => {
      return this._type;
    };

    this.get = async () => {
      return this._value;
    };

    this.set = async (value) => {
        if (typeof value === 'undefined') return false;
        this._value = value;
        return true;
    };

    this.set(value);
  }
}

module.exports = v_base;
