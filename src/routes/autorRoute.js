import express from "express";
import * as controller from "../controllers/autorController.js";

const router = express.Router();

router.get("/autor", controller.buscarTodos);
router.get("/autor/:id", controller.buscarPorId);
router.put("/autor/:id", controller.atualizar);

export default router;
