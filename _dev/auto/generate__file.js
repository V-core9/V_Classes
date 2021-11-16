const v_fs = require("v_file_system");

autoReloaderJSONgen = async () => {

  var arInfo = {
    last_build: Date.now(),
    runningTest: 1
  };
  
  return await fs.write('./dist/arl_info.json', JSON.stringify(arInfo, true, 2));
};

autoReloaderJSONgen();

