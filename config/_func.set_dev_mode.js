//-> setDevMode () # returns set mode
function setDevMode(setMode = "live") {
  if (["dev", "test", "live"].includes(setMode)) {
    return setMode;
  } else {
    return defaultMode;
  }
}

module.exports = setDevMode;
