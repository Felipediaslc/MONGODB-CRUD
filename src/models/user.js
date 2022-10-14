const mongoose = require('mongoose');


//const User = new  mongoose.Schema( {
//    nome: { type: String, required: true},
//    telefone: { type: String,},
 //   email: { type: String, required: true }, 
//    enderecos: { type: Array, required: true },
//})

const Product = new  mongoose.Schema( {
    nome: { type: String, required: true},
    descriçao: { type: String,},
    preco: [], 
    categorias: [],
    medidas: [],
});

const preco = new  mongoose.Schema( {
    precodevenda: { type: Number},
    precodecompra: { type: Number},
    desconto: { type: String},
    quantidade: { type: Number},
});
const categoria = new  mongoose.Schema( {
    categoria: { type: String},
    Time: { type: String},
    Legenda: { type: String},
    
});

const medidas = new  mongoose.Schema( {
    tamanho01: { type: String},
    referencia01: { type: String},
    tamanho02: { type: String},
    referencia02: { type: String},
    tamanho03: { type: String},
    referencia04: { type: String},
});
module.exports =  mongoose.model('Produtos', Product)