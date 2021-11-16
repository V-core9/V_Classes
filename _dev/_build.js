const v_execute = require('v_execute');

// Simple listing
v_execute("bash -c \" node config/_configure.js mode=dev ; start bash -c \\\"nodemon --exec npm run build \\\";\" exit ;");
// Simple listing
v_execute(" bash -c \"npm run __server \" exit ");
