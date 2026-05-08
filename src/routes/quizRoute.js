import express from "express";
import * as controller from "../controllers/quizController.js";

const router = express.Router();

router.post("/quiz", controller.criar);
router.get("/quiz", controller.buscarTodos);
router.get("/quiz/:id", controller.buscarPorId);
router.put("/quiz/:id", controller.atualizar);
router.delete("/quiz/:id", controller.deletar);

export default router;
