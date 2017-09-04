function ClientesDAO(connection){
  this._connection = connection
}

ClientesDAO.prototype.getClientes = function(callback){
  this._connection.query('SELECT * FROM clientes', callback);
}

ClientesDAO.prototype.salvarCliente = function(cliente, callback){
  this._connection.query('INSERT INTO clientes SET ?', cliente, callback);
}

module.exports = function() {
  return Clientes;
}
