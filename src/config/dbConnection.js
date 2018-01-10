const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'iogasvega.me',
        user: 'root',
        password: '6e427a8f9e813fd2f0ecc6a692',
        database: 'almacenamiento'
    });
}