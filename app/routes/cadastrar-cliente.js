module.exports = function(app) {
  app.get('/cadastrar-cliente', function(req, res) {
    res.render('admin/form_add_cliente', {validacao: {}, cliente: {}});
  });

  app.post('/clientes/salvar', function (req, res) {
    var cliente = req.body;
    //res.send(cliente);

    req.assert('nome', 'Nome é obrigatório').notEmpty();
    req.assert('sobrenome', 'Sobrenome é obrigatório').notEmpty();
    req.assert('cep', 'CEP é obrigatória').notEmpty(); 
    req.assert('endereco', 'Endereço tem que ter no minimo 10 caracteres e no maximo 200').len(10, 200);
    req.assert('cpf', 'CPF precisa ter exatamente 11 caracteres').len(11, 11);

    var erros = req.validationErrors();
    //console.log(erros);

    if(erros){
      res.render('admin/form_add_cliente', {validacao: erros, cliente: cliente});
      return;
    }

    // Conexao
    // Model
    var connection = app.config.dbConnection();
    var clientesModel = new app.app.models.ClientesDAO(connection);

    // FUNÇÃO DE INSERT
    clientesModel.salvarCliente(cliente, function(error, result) {
      res.redirect('/clientes');
    });

  });
}
