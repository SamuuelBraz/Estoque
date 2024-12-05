const express = require('express');
const produtoRoutes = require('./routes/produtoRoutes');
const loginRoutes = require('./routes/loginRoutes')
const sequelize = require('./config/database');

const app = express();

// Middleware para processar JSON
app.use(express.json());

// Configuração de rotas
app.use('/produtos', produtoRoutes);
app.use('/login', loginRoutes)

// Sincronização do banco de dados
sequelize.sync()
    .then(() => {
        console.log('Banco de dados sincronizado com sucesso!');
    })
    .catch(err => {
        console.error('Erro ao sincronizar o banco de dados:', err);
    });

// Middleware para rotas inexistentes
app.use((req, res, next) => {
    res.status(404).json({ error: 'Rota não encontrada!' });
});

module.exports = app;

