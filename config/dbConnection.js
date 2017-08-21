var mysql = require('mysql');
var conecMySQL = function(){
    console.log('Conexão estabelecida');
    return mysql.createConnection(
    {
        host : 'localhost',
        user : 'root',
        password : 'fiap',
        database : 'sistema_produtos'
    });
}

module.exports = function(){ 
    return conecMySQL;
} 
