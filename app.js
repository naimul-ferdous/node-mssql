const express = require('express');
const app = express();
async function init() {
  const approuting = require('./src/modules');
  const appmodules = new approuting(app);
  appmodules.init();
}
init();
module.exports = app;