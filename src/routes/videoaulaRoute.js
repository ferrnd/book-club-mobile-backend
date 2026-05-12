import express from "express";
import * as controller from "../controllers/videoaulaController.js";
import { admKey } from '../lib/middlewares/apiKey.js';

const router = express.Router();

router.get("/videoaula", controller.buscarTodos);
router.get("/videoaula/:id", controller.buscarPorId);
router.put("/videoaula/:id", admKey, controller.atualizar);

export default router;
