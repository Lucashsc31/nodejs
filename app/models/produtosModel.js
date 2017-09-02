module.exports = function(){
    this.getProdutos = function(connection, callback){
        connection.query('SELECT * FROM produtos', callback);
    }
    this.getProduto = function(connection, callback){
        connection.query('SELECT * FROM produtos WHERE id_produtos = 1', callback);
    }
    this.salvarProduto = function(produto, connection, callback){
        connection.query('INSERT INTO produtos SET ?', produto, callback);
    }
    return this;
}