const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.listarCamisetas); // Rota para listar todas as camisetas
router.post('/cadastrar', adminController.cadastrarCamiseta); // Rota para adicionar uma nova camiseta
router.put('/alterar/:id', adminController.alterarCamiseta); // Rota para alterar uma camiseta existente
router.delete('/deletar/:id', adminController.deletarCamiseta); // Rota para deletar uma camiseta existente

module.exports = router;