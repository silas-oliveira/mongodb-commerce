// return nome, quantidade de curtidas, e vendidos.
// dos produso que não sejam Big Mac e McChicken 

db.produtos.find({ nome: { $nin: ["Big Mac", "McChicken"] } },
{ _id: 0, nome: 1, curtidas: 1, vendidos: 1 });