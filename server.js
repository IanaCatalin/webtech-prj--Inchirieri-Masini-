var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
app.use(bodyParser.json());
app.use(cors());

var Sequelize = require("sequelize");

// init sequelize connexion
var sequelize = new Sequelize('database', 'username', 'password', {
   dialect: 'mysql',
   host: '127.0.0.1',
   port: 3306
});
/*
// define entity
var Cars = sequelize.define('Cars', {
  Name: {
    type: Sequelize.STRING,
    field: 'Name'
  },
  Engine: {
    type: Sequelize.STRING,
    field: 'Engine'
  },
  Gearbox: {
    type: Sequelize.STRING,
    field: 'Gearbox'
  },
  Startingprice: {
    type: Sequelize.INT,
    field: 'Starting price'
  },
 
}, {
  timestamps: false
});
*/
// create an Cars
app.post('/Cars', function(request,response) {
  Cars.create(request.body).then(function(Cars) {
      Cars.findById(Cars.id).then(function(Cars) {
          response.status(201).send(Cars);
      });
  });
});


//READ all
app.get('/Cars', function(request,response){
     /*global Cars*/
    Cars.findAll().then(function(Cars){
        response.status(200).send(Cars);
    });
});

//READ one
/*app.get('/articles/:id', function(request,response){
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
app.get('/Cars', function(req,res){
    res.status(200).send([]);
});

app.listen(process.env.PORT);