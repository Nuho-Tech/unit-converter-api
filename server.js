/* ****************** Aqui va la logica principal del servidor que usará express,
debe levantarse escuchando peticiones en el puerto 8080 ****************** */
const express = require('express');
const app = express();

app.get('/');

app.listen('8080', function() {
  console.log('texto para probar Servidor web escuchando en el puerto 8080');
});
