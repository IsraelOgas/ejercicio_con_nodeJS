const app = require('./config/server');

require('./app/routes/usuarios')(app);

// iniciar servidor
app.listen(app.get('port'), () =>{
    console.log('servidor en el puerto ', app.get('port'));
});


