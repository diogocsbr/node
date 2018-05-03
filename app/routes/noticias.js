var dbconnection = require("../../config/dbconnection");

module.exports = function(app){
    
    app.get('/noticias', function(req, res){
            
       var connection = dbconnection();
        
        connection.query(
            "select * from noticias", function ( error, result) {
                res.render("noticias/noticias", { noticias : result });
//                res.send(result);
            });
    
    });



}