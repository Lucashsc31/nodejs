module.exports.clientes = function(app, req, res){
    var connection = app.config.dbConnection();
    var clientesModel = new app.app.models.clientesDAO(connection);

    clientesModel.getClientes(function (error, result) {
      res.render('clientes/clientes', {clientes: result});
    });
}