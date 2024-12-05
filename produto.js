const {DataTypes} = require('sequelize')
const sequelize = require('../config/database')

//Definição do modelo de Produto 
const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantidade:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca:{
        type: DataTypes.STRING,
        allowNull: false 
    },

},{
})
/*
 Produto.create(
    {   
        nome: 'Mouse', 
        quantidade: 100,
        descricao: '',
        marca: ''
    }).then(()=>{
    console.log('Produto criado com sucesso!')
}).catch((err)=>{
    console.log('Erro ao criar produto:', err)
})
//Produto.sync({force:true})
*/
module.exports = Produto





