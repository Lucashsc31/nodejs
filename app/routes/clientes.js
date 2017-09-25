module.exports = function(app){
  app.get('/clientes', function (req,res) {
    app.app.controllers.clientes.clientes(app, req, res);
  });
}
