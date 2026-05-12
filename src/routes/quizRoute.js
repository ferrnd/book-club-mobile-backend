import express from "express";
import * as controller from "../controllers/quizController.js";
import { admKey } from '../lib/middlewares/apiKey.js';

const router = express.Router();

router.post("/quiz", admKey, controller.criar);
router.get("/quiz", controller.buscarTodos);
router.get("/quiz/:id", controller.buscarPorId);
router.put("/quiz/:id", admKey, controller.atualizar);
router.delete("/quiz/:id", admKey, controller.deletar);

export default router;
