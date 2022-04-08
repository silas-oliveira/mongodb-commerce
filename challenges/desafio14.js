// Crie uma query que retorne todos os lanches que possuem picles em seus ingredientes e mostre apenas os 3 primeiros itens contidos no array valoresNutricionais.

// Sua query deve retornar apenas os campos nome, ingredientes e valoresNutricionais.

// db.produtos.updateMany({ ingredientes: { $eq: "picles" } }, 
// { $push: { valoresNutricionais: { $each: ["playboy"], $slice: 2 } } }); 

// db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1, valoresNutricionais: 1 });
// { _id: 0, nome: 1, ingredientes: 1, valoresNutricionais: 1 });

// { $each: [{ $slice: 2 }] }
    // { ingredientes: { $eq: "picles" } },

// db.produtos.find(
//   {
//     $and: [
//      { ingredientes: { $eq: "picles" } },
//      { valoresNutricionais: { index.3 } }
//     ],
//   },
// ); 
