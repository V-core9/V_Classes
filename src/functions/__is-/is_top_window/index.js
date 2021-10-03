//-<[ Checking if we are the root ]>._____ 
const is_top_window = () => {
  this. _isTop = () => {
    if (window.top != window.self) {
      console.warn("! NOT TOP WINDOW !");
      return false;
    } else {
      console.info("IS OK >> TOP WINDOW");
      return true;
    }
  }

  if (typeof this._value === 'undefined') {
    this._value = this._isTop();
  }

  this.value = () => {
    return this._value;
  };

  return this.value();
}
//-----------------------------[_V_]----

module.exports = is_top_window;
