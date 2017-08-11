module.exports = function(app){
    app.get('/cadastrar', function(req, res){
        res.render('admin/form_add_produto');
    });
}