var dbConnection = require("../../config/dbConnection")();

module.exports = function(app){
    app.get("/clientes", function(req, res){
        dbConnection.query("SELECT * FROM clientes",function(error, result){
            res.render("clientes/clientes", {clientes:result});
        });
    });
}