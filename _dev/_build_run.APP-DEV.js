const bashDo = require('v_cli_bash_do');

// Simple listing
bashDo("node config/_configure.js mode=dev ; exit; ");
// Simple listing
bashDo(" start bash -c \" nodemon --exec node-sass -r src/style -o dist/style \" ");
// Simple listing
bashDo(" start bash -c \"nodemon --exec npm run build\" ");
// Simple listing
bashDo(" start bash -c \" npm run start_server \" ");
