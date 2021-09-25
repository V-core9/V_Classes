let fs = require("fs");

const autoreloaderJSONgen = () => {

  var arInfo = {
    last_build: Date.now(),
    runningTest: 1
  }
  
  fs.writeFileSync('./dist/autoreload_info.json', JSON.stringify(arInfo, true, 2));
}

autoreloaderJSONgen();

