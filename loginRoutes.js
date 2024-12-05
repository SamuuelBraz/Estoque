const express = require('express');
const loginController = require('../controllers/loginController');



const router = express.Router(); // Cria uma instância do roteador

// Rotas de API para os produtos
router.get('/api', loginController.getAllLogin); // Listar todos os Usuarios
router.post('/api', loginController.createLogin); // Criar um novo Usuario
router.put('/api/:id', loginController.updateLogin); // Editar Usuario
router.delete('/api/:id', loginController.deleteLogin); // Deletar Usuario

// Exporta as rotas para que possam ser usadas em outro arquivo
module.exports = router;
