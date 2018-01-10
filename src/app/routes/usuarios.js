const dbConnection = require('../../config/dbConnection');

module.exports = app => {
    const connection = dbConnection();

    app.get('/', (req, res) =>{
        connection.query('SELECT * FROM usuarios', (err, result)=>{
            res.render('usuarios/usuarios', {
                usuarios: result
            });
        });
    })
}