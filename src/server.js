const app = require("./app");
const http = require("http");
const db = require("./models");
const pe = require("parse-error");
const { port } = require('./config/index')['server']

const server = http.createServer(app);
// const https = require('https');
// const fs = require('fs');

// const options = {
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem')
// };

// const server = https.createServer(options, app);

db.sequelize
.authenticate()
.then(() => {
    console.log('connection has been established successfully.');
    db.sequelize.sync({
      logging: false,
      // force: true
    })
  })
  .catch(err => console.error('unable to connect to the database', err));
  
  try {
    server.listen(port, () => {
      console.log(`🚀🚀 server started on port:: ${port} 🚀🚀`);
    })
  } catch (error) {
    console.error("An error occured: ", error);
  };
  
  process.on('unhandledRejection', error => {
    console.error('Uncaught Error', pe(error));
  });