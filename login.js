const {DataTypes} = require('sequelize')
const sequelize = require('../config/database')

const Login = sequelize.define('Usuario', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})
/*
Usuario.create({
    email: "",
    senha: ""
})*/


//Usuario.sync({force: true})


module.exports = Usuario