// Setup basic express server
var compression = require('compression');
const express = require("express");
const app = express();
const path = require("path");
const server = require("http").createServer(app);
const vConfig = require("../config/v_system_config");

console.log(vConfig);
// compress all responses
app.use(compression());
// Routing
app.use(express.static(path.join(__dirname, "../dist")));


server.listen(vConfig.port, () => {
  console.log("Server listening at vConfig.port %d", vConfig.port);
});
