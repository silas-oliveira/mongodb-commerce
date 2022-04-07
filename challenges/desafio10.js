// retorne nome;
// de tudo;
// que tenha percentual de proteínas maior ou igual a 30 e menor ou igual a 40

db.produtos.find({ valoresNutricionais:
  { $elemMatch: { tipo: "proteínas", percentual: { $gte: 30, $lte: 40 } } } }, {
    _id: 0,
    name: 1,
  });