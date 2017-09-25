module.exports = function(app){
  app.get('/cadastrar-produto', function(req, res){
    app.app.controllers.cadastrar_produto.formulario_produto(app, req, res);
  });

  app.post('/produtos/salvar', function(req, res) {
    app.app.controllers.cadastrar_produto.add_produto(app, req, res);
  });
}
