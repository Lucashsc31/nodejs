module.exports = function(app) {
  app.get('/cadastrar-cliente', function(req, res) {
    app.app.controllers.cadastrar_cliente.formulario_cliente(app, req, res)
  });

  app.post('/clientes/salvar', function (req, res) {
    app.app.controllers.cadastrar_cliente.add_cliente(app, req, res);
  });
}
