import express from 'express';
import * as controller from '../controllers/membroController.js';

const router = express.Router();

router.get('/membros', controller.buscarTodos);
router.get('/membros/:id', controller.buscarPorId);
router.put('/membros/:id', controller.atualizar);

export default router;