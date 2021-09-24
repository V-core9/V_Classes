// Setup basic express server
const express = require("express");
const app = express();
const path = require("path");
const server = require("http").createServer(app);
const vCfg = require("../__vCfg");

console.log(vCfg);

server.listen(vCfg.port, () => {
  console.log("Server listening at vCfg.port %d", vCfg.port);
});

// Routing
app.use(express.static(path.join(__dirname, "../dist")));
