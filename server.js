/* ****************** Aqui va la logica principal del servidor que usará express,
debe levantarse escuchando peticiones en el puerto 8080 ****************** */
const express = require('express');
const app = express();

app.get('/');

app.listen('8080', function() {
  console.log('texto para probar Servidor web escuchando en el puerto 8080');
});



//server con rutas

const express = require('express');
const app = express();


app.get('/' , function( peticion, respuesta){
   
    respuesta.send("ruta funcionando")
  })

  var adminRouter = express.Router();

  adminRouter.get('/', function(req,res){
    res.send("index");
  })

  adminRouter.get('/random', function(req, res){
    res.send("random page");
  })


app.listen('8080', function() {
  console.log('texto para probar Servidor web escuchando en el puerto 8080');
});

