var app = require("./config/server");


var rotaHome = require('./app/routes/home');
var rotaNoticias = require('./app/routes/noticias')(app);
var rotaInclusaoNoticias = require('./app/routes/formulario_inclusao_noticia')(app);

rotaHome(app);


app.listen(3000, function()
{
    //console.log(msg);
    //console.log(msg1);

    console.log('Servidor ON');
});