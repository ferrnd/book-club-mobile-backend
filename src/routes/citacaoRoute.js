import express from "express";
import * as controller from "../controllers/citacaoController.js";

const router = express.Router();

router.get("/citacao", controller.buscarTodos);
router.get("/citacao/:id", controller.buscarPorId);
router.put("/citacao/:id", controller.atualizar);

export default router;
