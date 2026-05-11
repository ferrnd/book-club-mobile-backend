import express from "express";
import * as controller from "../controllers/autorController.js";
import { admKey } from '../lib/middlewares/apiKey.js';

const router = express.Router();

router.get("/autor", controller.buscarTodos);
router.get("/autor/:id", controller.buscarPorId);
router.put("/autor/:id", admKey, controller.atualizar);

export default router;
