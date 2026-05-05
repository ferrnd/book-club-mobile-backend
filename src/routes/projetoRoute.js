import express from 'express';
import * as controller from '../controllers/projetoController.js';

const router = express.Router();

router.get('/projeto', controller.buscarTodos);
router.get('/projeto/:id', controller.buscarPorId);
router.put('/projeto/:id', controller.atualizar);

export default router;