let fs = require("fs");
const path = require("path");
const bashDo = require("v_cli_bash_do");
const args = require("args-parser")(process.argv);

console.log(args);

console.log("I WILL BUILD THIS PROJECT");

var config = JSON.parse(
  JSON.parse(
    JSON.stringify(
      fs.readFileSync(path.join(__dirname, "_generated.json"), "utf-8")
    )
  )
);

console.log(config);

if (typeof args.mode !== "undefined") {
  config.mode = (["dev", "test", "live"].includes(args.mode) )? args.mode : "live";
} else {
  config.mode = "live";
}
// Simple listing
bashDo("PWD");

console.info(config);

fs.writeFileSync(
  path.join(__dirname, "_generated.json"),
  JSON.stringify(config, true, 2)
);
