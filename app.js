//var modulo_teste = require("./modulo_teste")();
var server = require("./config/server")("ejs", 3000, "./app/views");
var app = server.app;

//ROUTES
var routeHome = require("./app/routes/home")(app);
var routeProdutos = require("./app/routes/produtos")(app);
var routeCadastrar = require("./app/routes/cadastrar")(app);
var routeClientes = require("./app/routes/clientes")(app);

app.listen(server.port, function(){
    console.log("Server ON");
});