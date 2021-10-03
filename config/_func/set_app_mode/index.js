
//-> appRunMode () # returns set mode
function setAppMode(setMode = "live") {
  if (!["dev", "test", "live"].includes(setMode)) {
    setMode = "live";
  }
  return setMode;
}

module.exports = setAppMode;
