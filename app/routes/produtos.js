var dbConnection = require("../../config/dbConnection")();

module.exports = function(app){
    app.get('/produtos', function(req, res){
        dbConnection.query('SELECT * FROM produtos', function(error, result){
            //res.send(result);
            res.render('produtos/produtos', {produtos: result});
        });
    });
}