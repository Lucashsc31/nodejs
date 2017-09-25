module.exports.produtos = function(app, req, res){
    var connection = app.config.dbConnection();
    var produtosModel = new app.app.models.produtosDAO(connection);

    produtosModel.getProdutos(function(error, result){
      res.render('produtos/produtos', {produtos: result });
    });
}

module.exports.produto = function(app, req, res){
    var connection = app.config.dbConnection();
    var produtosModel = new app.app.models.produtosDAO(connection);

    produtosModel.getProduto(function(error, result){
      res.render('produtos/produto', {produto: result });
    });
}