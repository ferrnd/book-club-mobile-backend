import express from "express";
import * as controller from "../controllers/contoController.js";
import { admKey } from '../lib/middlewares/apiKey.js';

const router = express.Router();

router.get("/contos", controller.buscarTodos);
router.get("/contos/:id", controller.buscarPorId);
router.put("/contos/:id", admKey, controller.atualizar);

export default router;
