// curtidas igual 36
// ou
// vendidos igual a 85

// retorne o campo nome, curtidas e vendidos;

db.produtos.find({ $or:
  [{ curtidas: { $eq: 36 } },
   { vendidos: { $eq: 85 } }] },
   { _id: 0, nome: 1, curtidas: 1, vendidos: 1 });
