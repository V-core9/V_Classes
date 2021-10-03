let fs = require("fs");

const buildInfoFileLocation = './dist/autoreload_info.json';
const updateBuildInfoFile = () => {

  var arInfo = {
    last_build: Date.now(),
    runningTest: 1
  }
  
  fs.writeFileSync(buildInfoFileLocation, JSON.stringify(arInfo, true, 2));
}

updateBuildInfoFile();

