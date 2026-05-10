import express from "express";
import * as controller from "../controllers/livroController.js";
import { admKey } from "../lib/middlewares/apiKey.js";

const router = express.Router();

router.get("/livro", controller.buscarTodos);
router.get("/livro/:id", controller.buscarPorId);
router.put("/livro/:id", admKey, controller.atualizar);

export default router;
