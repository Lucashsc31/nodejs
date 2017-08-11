module.exports = function(_viewEngine, _port, _views){
    this.app = require("express")();
    //A engine de view sera EJS, e para setarmos isso na propriedade node
    this.viewEngine = _viewEngine;
    this.views = _views;
    this.port = _port;
    this.app.set('views', this.views);
    this.app.set('view engine', this.viewEngine);
    return this;
}