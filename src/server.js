import express from "express";
import "dotenv/config";
import livrosRoutes from "./routes/livroRoute.js";
import projetoRoutes from "./routes/projetoRoute.js";
import autorRoutes from "./routes/autorRoute.js";
import contoRoutes from "./routes/contoRoute.js";
import membroRoutes from "./routes/membroRoute.js";
import personagemRoutes from "./routes/personagemRoute.js";
import citacaoRoutes from "./routes/citacaoRoute.js";
import dicaRoutes from "./routes/dicaRoute.js";
import quizRoutes from "./routes/quizRoute.js";
import videoaulaRoute from "./routes/videoaulaRoute.js";
import { apiKey, admKey } from "./lib/middlewares/apiKey.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 API funcionando");
});

app.use("/api", apiKey, livrosRoutes);
app.use("/api", apiKey, projetoRoutes);
app.use("/api", apiKey, autorRoutes);
app.use("/api", apiKey, contoRoutes);
app.use("/api", apiKey, membroRoutes);
app.use("/api", apiKey, personagemRoutes);
app.use("/api", apiKey, citacaoRoutes);
app.use("/api", apiKey, dicaRoutes);
app.use("/api", apiKey, quizRoutes);
app.use("/api", apiKey, videoaulaRoute);

app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
