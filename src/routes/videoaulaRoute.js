import express from 'express';
import * as controller from '../controllers/videoaulaController.js';

const router = express.Router();

router.get('/videoaula', controller.buscarTodos);
router.get('/videoaula/:id', controller.buscarPorId);
router.put('/videoaula/:id', controller.atualizar);

export default router;
