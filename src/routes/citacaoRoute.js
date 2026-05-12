import express from "express";
import * as controller from "../controllers/citacaoController.js";
import { admKey } from '../lib/middlewares/apiKey.js';

const router = express.Router();

router.get("/citacao", controller.buscarTodos);
router.get("/citacao/:id", controller.buscarPorId);
router.put("/citacao/:id", admKey, controller.atualizar);

export default router;
