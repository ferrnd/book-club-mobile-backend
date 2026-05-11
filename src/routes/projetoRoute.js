import express from "express";
import * as controller from "../controllers/projetoController.js";
import { admKey } from '../lib/middlewares/apiKey.js';

const router = express.Router();

router.get("/projeto", controller.buscarTodos);
router.get("/projeto/:id", controller.buscarPorId);
router.put("/projeto/:id", admKey, controller.atualizar);

export default router;
