const dotenv = require('dotenv');
dotenv.config();

const env = process.env.NODE_ENV || 'development';
const database = require('./database.json')[env];
const mailer = require('./mailer.json')[env];
const server = require('./server.json')[env];


module.exports = {
    database, mailer, server
}