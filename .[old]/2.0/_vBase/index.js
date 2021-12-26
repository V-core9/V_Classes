class vBase {
  constructor(value) {
    this._v_uid = this.constructor.name + "_" + Date.now();
    this._value = value;
    this._type = this.constructor.name;
    this._created_timestamp = Date.now();
    this._updated_timestamp = 0;


    // Gets the type of the thing
    this.type = () => {
      return this._type;
    };

    // Created Timestamp
    this.creationTime = () => {
      return this._created_timestamp;
    };

    // Last Update Timestamp
    this.updatedTime = () => {
      return this._updated_timestamp;
    };

    // VALUE -> gets the value
    this.value = () => {
      return this.get();
    };

    // GET value
    this.get = () => {
      return this._value;
    };

    this.updateValue = (updateIN) => {
      this.set(updateIN);
    };


    this.accepts = (accIN = null) => {
      return true;
    };

    this.set = (settingVal) => {
      if (this.accepts(settingVal)) {
        this._value = settingVal;
        this._updated_timestamp = Date.now();
        return true;
      } else {
        return false;
      }
    };
  }
}

module.exports = vBase;
