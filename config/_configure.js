

let fs = require("fs");
const path = require("path");
const args = require("args-parser")(process.argv);
const configFilePath = path.join(__dirname, "../_v_config.json");

let readObjectFromFile = require("./_func/read_object_from_file");
let setAppMode = require("./_func/set_app_mode");


const appConfigCreate = () => {
  try {
    // [ 1. ] Actually reading the config file
    console.log("<[ Configuration Settings ]>-----");
    var config = readObjectFromFile(configFilePath);


    // [ 2. ] Checking if args exist and if mode not undefined then try to set it
    console.log(config);
    if (typeof args !== "undefined") {
      console.log("Found args : " + JSON.stringify(args));
      if (typeof args.mode !== 'undefined') config.mode = setAppMode(args.mode);
    }


    // [ 2. ] Re=>Setting config just in case no args have been used or missing so it gets to defaults
    config.mode = setDevMode(config.mode);
    console.info(config);


    // [ 3. ] Actually saving the config file 
    fs.writeFileSync(configFilePath, JSON.stringify(config, true, 2));
    return true;
  } catch (err) {
    return err;
  }
}

const _docs_info = {
  title: "_configure.js",
  description: {
    short: "This file will take CLI ARGS and save App Running Mode in the root config file.",
    base: "This file will take CLI ARGS and save App Running Mode in the root config file.This file will take CLI ARGS and save App Running Mode in the root config file.This file will take CLI ARGS and save App Running Mode in the root config file.This file will take CLI ARGS and save App Running Mode in the root config file.This file will take CLI ARGS and save App Running Mode in the root config file.This file will take CLI ARGS and save App Running Mode in the root config file. "
  },
  location: path.basename(__filename)
}

appConfigCreate();
