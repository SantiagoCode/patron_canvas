var cafecito = require("express");
var aplicacion = cafecito();

aplicacion.get("/", inicio);

function inicio(peticion, resultado)
{
  resultado.sendfile("index.html");
}

aplicacion.listen(8989);




// const express = require('express')
// const app = express()
//
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
//
// app.listen(3000)
