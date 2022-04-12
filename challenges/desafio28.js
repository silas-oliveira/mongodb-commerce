// Conte quantos produtos têm 4 ingredientes
db.produtos.find(
  { 
    ingredientes: { $size: 4 },
  },
  { _id: 0, ingredientes: 1 },
).count();