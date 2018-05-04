var mysql = require('mysql');

var commMysql = function () {
    console.log('Conexao estabelecida');    
    return mysql.createConnection({
        host: 'localhost',
        user: 'root', 
        password: 'root',
        database: 'portal_noticias'
    });
}

module.exports = function ()
{
    console.log('Conexao carregada');
    return commMysql;
}