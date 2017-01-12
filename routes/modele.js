var models  = require('../models');
var express = require('express');
var router  = express.Router();

var modele = models.Modele;

// create an modele
router.post('/Modele', function(request,response) {
  modele.create(request.body).then(function(Modele) {
      modele.findById(Modele.id).then(function(Modele) {
          response.status(201).send(Modele);
      });
  });
});

// returns all Modele
router.get('/Modele', function(request,response){
     /*global modele*/
    modele.findAll().then(function(Modele){
        response.status(200).send(Modele);
    });
});

// returns one modele by id
router.get('/Modele/:id', function(request,response){
    modele.findById(request.params.id).then(function(modele){
        if(modele) {
            response.status(200).send(modele);
        } else {
            response.status(404).send();
        }
    });
});

// update a specific modele by id
router.put('/Modele/:id', function(request,response){
    modele
        .findById(request.params.id)
        .then(function(modele){
            if(modele) {
                modele
                    .updateAttributes(request.body)
                    .then(function(){
                        response.status(202).send('updated');
                    })
                    .catch(function(error){
                        console.warn(error);
                        response.status(400).send('server error');
                    });
            } else {
                response.status(404).send();
            }
        });
});

// delete an modele by id
router.delete('/Modele/:id', function(req,res){
    modele
        .findById(req.params.id)
        .then(function(modele){
            if(modele) {
                modele
                    .destroy()
                    .then(function(){
                        res.status(204).send();
                    })
                    .catch(function(error){
                        console.warn(error);
                        res.status(400).send('server error');
                    });
            } else {
                res.status(404).send();
            }
        });
});

module.exports = router;