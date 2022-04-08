// retorne todos os lanches que possuem picles em seus ingredientes
// mostre apenas os 3 primeiros itens contidos no array valoresNutricionais

// duas queries

// db.produtos.find({ ingredientes: { $eq: "picles" } });
// db.produtos.find({}, { _id: 0, valoresNutricionais: 1 });
// db.produtos.updateMany({ $push: { valoresNutricionais: { $slice: 3 } } });

// db.produtos.updateOne({ ingredientes: "picles" }, { $set: { ingredientes: ["tata"] } });
// db.produtos.updateMany({ ingredientes: { $eq: "picles" } }, { $push: { 
//   valoresNutricionais: { $each: [], $slice: 1 },
//  } }, { upsert: true });

db.produtos.find({ ingredientes: "picles" },
{ nome: 1, ingredientes: 1, valoresNutricionais: { $slice: 3 }, _id: 0 });