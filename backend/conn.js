const mysql = require('mysql2');

connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'todouser',
    password: 'test',
    database: 'todouser'
})

module.exports = connection;