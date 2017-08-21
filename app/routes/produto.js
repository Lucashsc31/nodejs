module.exports = function(app){
    app.get('/produto', function(req, res){
        var connection = app.config.dbConnection();
        var produtosModel = app.app.models.produtosModel;
        produtosModel.getProdutos(connection, function(error, result){
            res.render('produtos/produto', {produto: result});
        });
    });
}
