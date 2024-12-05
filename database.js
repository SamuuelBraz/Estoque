const { Sequelize } = require('sequelize');
const Produto = require('../models/produto');
const sequelize = new Sequelize('estoque','root', 'samuel', {
  host: '192.168.9.248',
  dialect: 'mysql',
  port: 3360
});

//Testando a conexão com o banco de dados 
sequelize.authenticate()
.then(()=>{
    console.log('Conexão com o banco de dados estabelecida com sucesso ')
    
    //Realizar uma consulta simples para garantir que o banco de dados está acessível 
    return sequelize.query('SELECT 1 + 1 AS result')
})
.then(([results, metadata])=>{
    console.log('Teste de consulta bem-sucedida', results[0].result)
})

.catch((err)=> console.error('Erro ao conectar no banco de dados:', err))

module.exports = sequelize