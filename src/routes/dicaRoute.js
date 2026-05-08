import express from 'express';
import * as controller from '../controllers/dicaController.js';

const router = express.Router();

router.post('/dicas', controller.criar);
router.get('/dicas', controller.buscarTodos);
router.get('/dicas/:id', controller.buscarPorId);
router.put('/dicas/:id', controller.atualizar);
router.delete('/dicas/:id', controller.deletar);

export default router;
