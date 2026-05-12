import express from "express";
import * as controller from "../controllers/membroController.js";
import { admKey } from '../lib/middlewares/apiKey.js';

const router = express.Router();

router.get("/membros", controller.buscarTodos);
router.get("/membros/:id", controller.buscarPorId);
router.put("/membros/:id", admKey, controller.atualizar);

export default router;
