//incorporando a biblioteca http
var http = require('http'); 

var server = http.createServer(function(req, res){
    var categoria = req.url;

    if(categoria === "/cerveja"){
        res.end("<html><body>Categoria de Cerveja</body></html>");
    }
    
    else if(categoria === "/musica"){
        res.end("<html><body>Categoria de Música</body></html>");
    }

    else if(categoria === "/tecnologia"){
        res.end("<html><body>Categoria de Tecnologia</body></html>");
    }


    res.end("<html><body>Primeira Página</body></html>");
});

server.listen(3000);