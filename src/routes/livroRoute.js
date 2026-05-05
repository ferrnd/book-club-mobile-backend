import express from 'express';
import * as controller from '../controllers/livroController.js';

const router = express.Router();

router.post('/livro', controller.criar);
router.get('/livro', controller.buscarTodos);
router.get('/livro/:id', controller.buscarPorId);
router.put('/livro/:id', controller.atualizar);
router.delete('/livro/:id', controller.deletar);

export default router;