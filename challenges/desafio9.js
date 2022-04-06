// Retorne o nome

// calorias abaixo de 500

db.produtos.find({ valoresNutricionais:
  { $elemMatch: { tipo: "calorias", quantidade: { $lt: 500 } } } }, { nome: 1, _id: 0 }); 