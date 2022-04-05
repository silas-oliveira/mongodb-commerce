db.produtos.find({ vendas: { $gt: 50, $lt: 100 } }, { nome: 1, vendidos: 1 }).sort({ vendas: 1 });
