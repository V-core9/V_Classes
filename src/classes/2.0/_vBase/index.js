// ____________________________________________________________________________
//<[ 2. vTimeStamp ()  >> Function Class Constructor                          ]>----
// [------------------->> declaration using a function that creates an object ]>----
// function vBase ( baseName ) {
//   this._baseName = baseName;

//   this.type = () => {
//     return this.constructor.name;
//   }

//   this.val = () => {
//     return this._value;
//   }

//   return this._value;
// };
//-+----------------------------------------------


class vBase {
  constructor(value) {
    this._v_uid = this.constructor.name + "_" + Date.now(),
    this._value = value;
    console.log("Class :: vBase  |  method :: constructor()");
    this._type = this.constructor.name;
    this._created_timestamp = Date.now();
    this._updated_timestamp = 0;


    // Gets the type of the thing
    this.type = () => {
      console.log(`UID[${this._v_uid}] | Class : ${this.constructor.name}  |  method : type() | return :: ${this._type}`);
      return this._type;
    };

    // Created Timestamp
    this.creationTime = () => {
      console.log(`UID[${this._v_uid}] | Class : ${this.constructor.name} | method : creationTime() | return :: ${this._created_timestamp}`);
      return this._created_timestamp;
    };

    // Last Update Timestamp
    this.updatedTime = () => {
      console.log(`UID[${this._v_uid}] | Class : ${this.constructor.name} | method : updatedTime() | return :: ${this._updated_timestamp}`);
      return this._updated_timestamp;
    };

    // VALUE -> gets the value
    this.value = () => {
      console.log(`UID[${this._v_uid}] | Class : ${this.constructor.name} | method : value() | return < ${this.get()}`);
      return this.get();
    };

    // GET value
    this.get = () => {
      console.log(`UID[${this._v_uid}] | Class : ${this.constructor.name} | method : get() | return < ${this._value}`);
      return this._value;
    };

    this.updateValue = (updateIN) => {
      console.log(`UID[${this._v_uid}] | Class : ${this.constructor.name} | method : updateValue() | settingTo > ${updateIN}`);
      this.set(updateIN);
    };


    this.accepts = (accIN = null) => {
      console.log(`UID[${this._v_uid}] | Class : ${this.constructor.name} | method : accepts() | [NOTE: BASE CLASS ALWAYS RETURNS TRUE]`);
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
