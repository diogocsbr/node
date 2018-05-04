
module.exports = function(app){
    
    app.get('/noticia', function(req, res){
            
       var connection = app.config.dbconnection();
       var modelNoticia = app.app.models.noticiasModel;

       modelNoticia.getNoticia(connection, function ( error, result) {
                res.render("noticias/noticia", { noticia : result });
            });
    
    });



}