const calculadora = require('../calculadora/calculadora');

function indexCalculadora(req, res) {
    res.render('index.html');
}

function calcular(req, res) {
    res.send(calculadora.somar());
}

function subtrair(req, res) {
    res.send(calculadora.subtrair()); 
}

function multiplicar(req, res) {
    res.send(calculadora.multiplicar()); 
}

function dividir(req, res) {
    res.send(calculadora.dividir()); 
}

module.exports = {
    indexCalculadora,
    calcular,
    subtrair,
    multiplicar,
    dividir
};
