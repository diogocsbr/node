module.exports = function(app){

    app.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia")
    });

    app.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
        //res.send(noticia);
        //res.send('chegou via post');
        
        //conexao
        //model

        //salvar noticia

        var connection = app.config.dbconnection();
        var noticiasModels = app.app.models.noticiasModel;
 
        noticiasModels.salvarNoticia(noticia, connection, function ( error, result) {
            res.redirect('/noticias');
         });
      

    });
}