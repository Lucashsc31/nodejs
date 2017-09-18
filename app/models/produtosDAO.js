function ProdutosDAO(connection) {
  this._connection = connection;
}

ProdutosDAO.prototype.getProdutos = function(callback){
  this._connection.query('SELECT * FROM produtos', callback);
}

ProdutosDAO.prototype.getProduto = function(callback) {
  this._connection.query('SELECT * FROM produtos WHERE id_produtos = 1', callback);
}

ProdutosDAO.prototype.salvarProduto = function(produto, callback) {
  this._connection.query('INSERT INTO produtos SET ? ', produto, callback);
}

module.exports = function(){
    return ProdutosDAO;
}
