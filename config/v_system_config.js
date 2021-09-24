let fs = require("fs");
const path = require("path");

function vCfgGet() {
  var vCfgFile = JSON.parse(
    JSON.stringify(
      fs.readFileSync(path.join(__dirname, "./root.config.json"), "utf-8")
    )
  );

  const vCfgObj = JSON.parse(vCfgFile);

  //fs.writeFileSync("./__vCfg_generated.json", JSON.stringify(vCfgFile, true, 2));

  var vCfgHelper = "";

  switch (mode) {
    case "dev":
      vCfgHelper = vCfgObj.dev;
      break;
    case "test":
      vCfgHelper = vCfgObj.test;
      break;
    case "live":
      vCfgHelper = vCfgObj.live;
      break;

    default:
      if (typeof vCfgObj.mode === "undefined") {
        vCfgHelper = vCfgObj.live;
      }
      break;
  }

  console.log(vCfgHelper);
  console.log(`vCfgHelper :  [ ${JSON.stringify(vCfgHelper, true, 2)} ]`);

  return vCfgHelper;
}

var mode = JSON.parse(  JSON.parse(    JSON.stringify(      fs.readFileSync(path.join(__dirname, "../_v_config.json"), "utf-8")    )  ) ).mode;

console.log(`Application Run Mode :  [ ${mode} ]`);

const vConfig = vCfgGet();

console.info(`vConfig :  [ ${JSON.stringify(vConfig, true, 2)} ]`);

module.exports = vConfig;
