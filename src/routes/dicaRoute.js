import express from "express";
import * as controller from "../controllers/dicaController.js";
import { admKey } from '../lib/middlewares/apiKey.js';

const router = express.Router();

router.post("/dicas", admKey, controller.criar);
router.get("/dicas", controller.buscarTodos);
router.get("/dicas/:id", controller.buscarPorId);
router.put("/dicas/:id", admKey, controller.atualizar);
router.delete("/dicas/:id", admKey, controller.deletar);

export default router;
