var express = require("express");
var app = express();
var Sequelize = require("sequelize");
var path = require('path');
var bodyParser = require("body-parser");
var cors = require("cors");
var models  = require('./models');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'demo')));
var Sequelize = require("sequelize");
/*
// init sequelize connexion
var sequelize = new Sequelize('database', 'username', 'password', {
   dialect: 'mysql',
   host: '127.0.0.1',
   port: 3306
});

// create an Cars
app.post('/Cars', function(request,response) {
  Cars.create(request.body).then(function(Cars) {
      Cars.findById(Cars.id).then(function(Cars) {
          response.status(201).send(Cars);
      });
  });
});


var data = [{id:1},{id:2},{id:3}];

//CREATE new resource
app.post('/masini', function(request, response) {
response.status(201).send(request.body);
});

//READ all 
app.get('/masini', function(request, response) {
response.status(200).send(data);
});

//READ one by id
app.get('/masini/:id', function(request, response) {
response.status(200).send(data[0]);
});

//UPDATE one by id
app.put('/masini/:id', function(request, response) {
response.status(201).send(request.body);
});

//DELETE one by id
app.delete('/masini/:id', function(request, response) {
response.status(201).send('Deleted' + request.params.id);
});



//READ all
app.get('/Cars', function(request,response){
   
    Cars.findAll().then(function(Cars){
        response.status(200).send(Cars);
    });
});

//READ one
app.get('/articles/:id', function(request,response){
    Article.findById(request.params.id).then(function(article){
        if(article) {
            response.status(200).send(article);
        } else {
            response.status(404).send();
        }
    });
});

//UPDATE
app.put('/articles/:id', function(request,response){
    Article
        .findById(request.params.id)
        .then(function(article){
            if(article) {
                article
                    .updateAttributes(request.body)
                    .then(function(){
                        response.status(200).send('updated');
                    })
                    .catch(function(error){
                        console.warn(error);
                        response.status(500).send('server error');
                    });
            } else {
                response.status(404).send();
            }
        });
});

*/






var nodeadmin = require('nodeadmin');
app.use(nodeadmin(app));

// REST methods
app.use(require("./routes/modele.js"));
app.listen(process.env.PORT);