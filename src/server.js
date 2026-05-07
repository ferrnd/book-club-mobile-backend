import express from 'express';
import 'dotenv/config';
import livrosRoutes from './routes/livroRoute.js';
import projetoRoutes from './routes/projetoRoute.js';
import autorRoutes from './routes/autorRoute.js';
import contoRoutes from './routes/contoRoute.js';
import membroRoutes from './routes/membroRoute.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('🚀 API funcionando');
});

app.use('/', livrosRoutes);
app.use('/', projetoRoutes);
app.use('/', autorRoutes);
app.use('/', contoRoutes);
app.use('/', membroRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});