const calc = require('/util/calculadora');
const express = require('express');

 const app = express();

 app.get("/somar", function(req, res) {
    let n1 = req.params.n1;
    let n2 = req.params.n2;
    res.send( ${n1} + ${n2} = ${calc.somar{n1, n2}});
 });

 app.get("/ola", function(req, res) {
    res.send("Hello, world");
 });

 const PORT = 8080;
 app.listen(PORT, function() {
    console.log " app rodando na porta " + PORT;
 });