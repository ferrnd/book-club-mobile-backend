import express from "express";
import * as controller from "../controllers/personagemController.js";
import { admKey } from '../lib/middlewares/apiKey.js';

const router = express.Router();

router.post("/personagens", admKey, controller.criar);
router.get("/personagens", controller.buscarTodos);
router.get("/personagens/:id", controller.buscarPorId);
router.put("/personagens/:id", admKey, controller.atualizar);
router.delete("/personagens/:id", admKey, controller.deletar);

export default router;
