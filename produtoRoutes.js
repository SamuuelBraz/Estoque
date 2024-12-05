const express = require('express');
const produtoController = require('../controllers/produtoController'); 

const router = express.Router(); // Cria uma instância do roteador

// Rotas de API para os produtos
router.get('/api', produtoController.getAllProduto); // Listar todos os produtos
router.post('/api', produtoController.createProduto); // Criar um novo produto
router.put('/api/:id', produtoController.updateProduto); // Editar produto
router.delete('/api/:id', produtoController.deleteProduto); // Deletar produto

// Exporta as rotas para que possam ser usadas em outro arquivo
module.exports = router;
