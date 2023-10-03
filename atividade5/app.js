const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const estoque = [];

app.post('/api/estoque/cadastrar/:id/:nome/:qtd', (req, res) => {
  const { id, nome, qtd } = req.params;
  estoque.push({ id, nome, qtd });
  res.status(201).json({ message: 'Produto cadastrado com sucesso' });
});

app.get('/api/estoque/listar', (req, res) => {
  res.json(estoque);
});

app.put('/api/estoque/editar/:id/:qtd', (req, res) => {
  const { id, qtd } = req.params;
  const produto = estoque.find((item) => item.id === id);
  if (!produto) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }
  produto.qtd = qtd;
  res.json({ message: 'Produto editado com sucesso' });
});

app.delete('/api/estoque/remover/:id', (req, res) => {
  const { id } = req.params;
  const index = estoque.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }
  estoque.splice(index, 1);
  res.json({ message: 'Produto removido com sucesso' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
