var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.set('view engine', 'ejs');



app.use('/assets', express.static(__dirname + '/public'))
app.use('/', function(req,res,next){
    console.log('Request URL' + req.url)
    next();
})

app.get('/', function(req,res){
    res.render('index');
})

app.get('/api', function(req,res){
    res.json({firstname: 'John', lastname:'Doe'});
})

app.get('/person/:id', function (req,res){
    res.render('person', {numero: req.params.id});
})

let data = [
    {id: 1, nombre: "Hugo", apellido: "Estreda Ramirez", edad: 19},
    {id: 2, nombre: "Estela", apellido: "Perez Suarez", edad: 18},
    {id: 3, nombre: "Sabrina", apellido: "Contreras Morales", edad: 17},
];

app.get('/personas/', function (req,res){
    res.render('personas', { data });
});

app.listen(port)
