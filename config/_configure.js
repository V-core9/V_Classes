let fs = require("fs");
const path = require("path");
const bashDo = require("v_cli_bash_do");
const args = require("args-parser")(process.argv);
const defaultMode = 'live';
const configFilePath = path.join(__dirname, "../_v_config.json");

let readObjectFromFile = require("./_func.read_object_from_file");
let setDevMode = require("./_func.set_dev_mode");



// [ 1. ] Actually reading the config file
console.log("<[ Configuration Settings ]>-----");
var config = readObjectFromFile(configFilePath);


// [ 2. ] Checking if args exist and if mode not undefined then try to set it
console.log(config);
if (typeof args !== "undefined") {
  console.log("Found args : " + JSON.stringify(args));
  if (typeof args.mode !== 'undefined') config.mode = setDevMode(args.mode);
}


// [ 2. ] Re=>Setting config just in case no args have been used or missing so it gets to defaults
config.mode = setDevMode(config.mode);
console.info(config);


// [ 3. ] Actually saving the config file 
fs.writeFileSync(configFilePath, JSON.stringify(config, true, 2));
