//var dbconnection = require("../../config/dbconnection");

module.exports = function(app){
    
    app.get('/noticias', function(req, res){
            
       var connection = app.config.dbconnection();
       var noticiasModels = app.app.models.noticiasModel;

       noticiasModels.getNoticias(connection, function ( error, result) {
            res.render("noticias/noticias", { noticias : result });
        });
     



       /* // vamos refatorar
        connection.query(
            "select * from noticias", function ( error, result) {
                res.render("noticias/noticias", { noticias : result });
//                res.send(result);
            });
    */
    });



}