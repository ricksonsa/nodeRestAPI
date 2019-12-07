var cors = require('cors');

module.exports = (app) => {

  var produtos = [
    {
        id: 0,
        nome: 'Biscoito',
        descricao: 'Biscoito recheado',
        preco: 2.99
    },
    {
        id: 1,
        nome: 'Amaciante',
        descricao: 'Produto de limpeza',
        preco: 4.45
    },
  ];

app.options('*', cors())

  app.get('/produtos', (req, res) => {
    res.json(produtos);
  });

  app.delete('/produtos/:id', (req, res) => {
    var id = req.params.id;
    produtos.splice(produtos.indexOf(produtos.find(x=>x.id == id), 1));
    res.send('Ok')
  });

  app.post('/produtos', (req, res) => {
    var produto = req.body;
    var lastId = produtos.length + 1;
    produto.id = lastId;
    produtos.push(produto);

    res.send(produto);
  });

}
