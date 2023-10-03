const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, data } = req.body;
    res.sendFile(path.join(__dirname, 'views', 'dados.html'));
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
