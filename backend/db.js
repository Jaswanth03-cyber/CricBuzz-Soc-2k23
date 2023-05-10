const Pool = require('pg').Pool;
require("dotenv").config({path: __dirname + '/project.env'}) ;

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DBPORT,
});

module.exports = pool;