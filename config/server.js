module.exports = function(_viewEngine, _port, _views, _database){
    this.app = require("express")();
    this.consign = require("consign");

    //A engine de view sera EJS, e para setarmos isso na propriedade node
    this.viewEngine = _viewEngine;
    this.views = _views;
    this.port = _port;
    this.database = _database;
    this.app.set('views', this.views);
    this.app.set('view engine', this.viewEngine);

    //Executa consign
    this.consign().include("app/routes").then(this.database).into(this.app);

    return this;
}