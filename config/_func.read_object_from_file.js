let fs = require("fs");
//-> readObjectFromFile ()  # returns object
function readObjectFromFile(pathToFile = null) {
  return JSON.parse( JSON.parse( JSON.stringify( fs.readFileSync(pathToFile, "utf-8"))));
}

module.exports = readObjectFromFile;
