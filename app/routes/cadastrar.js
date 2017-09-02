module.exports = function(app){
    app.get('/cadastrar', function(req, res){
        res.render('admin/form_add_produto');
    });

    app.post('/produtos/salvar',function(req, res){
        var produto = req.body;
        var connection = app.config.dbConnection();
        res.send(produto);
    });
}