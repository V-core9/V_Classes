const v_fs = require("v_file_system");

//Auto-Re-Load Info File Generate
arlGenerate = async () => {

  var arInfo = {
    last_build: Date.now(),
    runningTest: 1
  };
  
  return await v_fs.promise.write('./dist/arl_info.json', JSON.stringify(arInfo, true, 2));
};

arlGenerate();

