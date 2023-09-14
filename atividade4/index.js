const express = require("express");
const app = express();
const calculadora = require("./util/calculadora");

app.get("/somar/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  const resultado = calculadora.somar(a, b);
  res.send(`A soma de ${a} e ${b} é igual a ${resultado}`);
});

app.get("/subtrair/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  const resultado = calculadora.subtrair(a, b);
  res.send(`A subtração de ${a} e ${b} é igual a ${resultado}`);
});

app.get("/multiplicar/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  const resultado = calculadora.multiplicar(a, b);
  res.send(`A multiplicação de ${a} e ${b} é igual a ${resultado}`);
});

app.get("/dividir/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  try {
    const resultado = calculadora.dividir(a, b);
    res.send(`A divisão de ${a} por ${b} é igual a ${resultado}`);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
