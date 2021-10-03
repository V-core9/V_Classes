const bashDo = require('v_cli_bash_do');

// Simple listing
bashDo("node config/_configure.js mode=live ; exit; ");
// Simple listing
bashDo(" start bash -c \"  npm run build \" ");
// Simple listing
bashDo(" start bash -c \" npm run start_server \" ");
