//var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

//var connection = dbConnection();

app.get('/clientes', function (req,res) {

var connection = app.config.dbConnection();
var clientesModel = new app.app.models.ClientesDAO(connection);

clientesModel.getClientes(function (error, result) {
  res.render('clientes/clientes', {clientes: result});
  });

});

}
