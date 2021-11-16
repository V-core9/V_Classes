const v_execute = require('v_execute');

// Simple listing
v_execute("node config/_configure.js mode=dev");
// Simple listing
v_execute(" start bash -c \" nodemon --exec node-sass -r src/style -o dist/style \" ");
// Simple listing
v_execute(" start bash -c \"nodemon --exec npm run build\" ");
// Simple listing
v_execute(" start bash -c \" npm run start_server \" ");
