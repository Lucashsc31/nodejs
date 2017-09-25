module.exports.formulario_cliente= function(app, req, res){
    res.render('admin/form_add_cliente', {validacao : {}, produto:{} });
}

module.exports.add_cliente = function(app, req, res){
    var cliente = req.body;
    //res.send(cliente);
    req.assert('nome', 'nome é obrigatório').notEmpty();
    req.assert('sobrenome', 'sobrennome é obrigatório').notEmpty();
    req.assert('cep', 'cep é obrigatório').notEmpty();
    req.assert('cpf', 'cpf é obrigatório').notEmpty();
    req.assert('cpf', 'cpf inválido').len(11,11);
    req.assert('endereco', 'endereco é obrigatório').notEmpty();
    req.assert('endereco', 'endereco precisar ter entre 10 e 200 caracateres').len(10, 200);

    var erros = req.validationErrors();

    if(erros){
        res.render('admin/form_add_cliente', {validacao : erros});
        return;
    }

    // Conexao
    // Model
    var connection = app.config.dbConnection();
    var clientesModel = new app.app.models.clientesDAO(connection);

    // FUNÇÃO DE INSERT
    clientesModel.salvarCliente(cliente, function(error, result) {
        res.redirect('/clientes');
    });
}
