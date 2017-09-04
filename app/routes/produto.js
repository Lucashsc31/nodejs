module.exports = function(app){

app.get('/produto', function(req, res){

var connection = app.config.dbConnection();
var produtosModel = new app.app.models.produtosDAO(connection);

produtosModel.getProduto(function(error, result){
    res.render('produtos/produto', {produto: result });
  });


});
}
