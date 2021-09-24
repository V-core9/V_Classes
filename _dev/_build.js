const bashDo = require("v_cli_bash_do");
const args = require("args-parser")(process.argv);

// Simple listing
bashDo("ls");

// Check git status
bashDo("git status");


console.log("I WILL BUILD THIS PROJECT");

// Simple listing
bashDo("PWD");

console.info(args);
