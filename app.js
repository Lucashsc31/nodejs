var express = require("express");
var app = express();

var mensagem= require("./modulo_teste");

//A engine de view sera EJS, e para setarmos isso na propriedade node
app.set('view engine', 'ejs');

//ROUTES

//inicial
app.get('/', function(req, res){
    res.render('home/home');
});

app.get('/cadastrar', function(req, res){
    res.render('admin/form_add_produto');
});

app.get('/produtos', function(req, res){
    res.render('produtos/produtos');
});


// app.get('/tecnologia', function(req, res){
//     res.send("<html><body>Página de Técnologia</body></html>");
// });

// app.get('/musica', function(req, res){
//     res.send("<html><body>Página de Musica</body></html>");
// });

// app.get('/tabuada', function(req, res){
//     var tabuadaHTML = [];
//     tabuadaHTML.push("<center>");
//     tabuadaHTML.push("<h2>Tabuadas</h2>");
//     for(i = 0; i <= 10; i++){
//         tabuadaHTML.push("<hr>");
//         tabuadaHTML.push("<b>Tabuada do " + i + "</b>");
//         for(j = 0; j <= 10; j++){
//             tabuadaHTML.push("<br>");
//             tabuadaHTML.push(i + "x" + j + "=" + (i*j));
//         }   
//     }
//     tabuadaHTML.push("</center>");
//     res.send("<html><body>" + tabuadaHTML.join("") + "</body></html>");
// });

app.listen(3000, function(){
    console.log("Servidor Ativo, rodando com Express!");
});