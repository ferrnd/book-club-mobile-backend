import express from 'express';
import * as controller from '../controllers/personagemController.js';

const router = express.Router();

router.post('/personagens', controller.criar);
router.get('/personagens', controller.buscarTodos);
router.get('/personagens/:id', controller.buscarPorId);
router.put('/personagens/:id', controller.atualizar);
router.delete('/personagens/:id', controller.deletar);

export default router;
