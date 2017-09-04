module.exports = function(app){

app.get('/produtos', function(req, res){

var connection = app.config.dbConnection();
var produtosModel = new app.app.models.produtosDAO(connection);

  produtosModel.getProdutos(function(error, result){
    res.render('produtos/produtos', {produtos: result });
  });


});
}
