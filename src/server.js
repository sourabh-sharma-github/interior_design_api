const app = require("./app");
const http = require("http");
const db = require("./models");
const pe = require("parse-error");
const { port } = require('./config/index')['server']

// const server = http.createServer(app);
const https = require('https');
const fs = require('fs');

var dad = fs.readFileSync('/etc/letsencrypt/live/renotopia.guru/fullchain.pem', 'utf8')
var privateKey = fs.readFileSync('/etc/letsencrypt/live/renotopia.guru/privkey.pem', 'utf8')
var certificate = fs.readFileSync('/etc/letsencrypt/live/renotopia.guru/cert.pem', 'utf8')
var credentials = {
  key: privateKey,
  cert: certificate,
  ca: dad
};

const server = https.createServer(credentials, app);

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

