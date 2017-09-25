module.exports = function(app){
  app.get('/produtos', function(req, res){
    app.app.controllers.produtos.produtos(app, req, res);
  });

  app.get('/produto', function(req, res){
    app.app.controllers.produtos.produto(app, req, res);
  });
}
