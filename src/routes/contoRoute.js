import express from "express";
import * as controller from "../controllers/contoController.js";

const router = express.Router();

router.get("/contos", controller.buscarTodos);
router.get("/contos/:id", controller.buscarPorId);
router.put("/contos/:id", controller.atualizar);

export default router;
