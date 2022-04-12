// Crie uma query que faça a adição do elemento muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40.
db.produtos.find(
  { 
    nome: { 
      $regex: /MC/i,
    },
  },
).count();