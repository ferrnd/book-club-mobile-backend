import express from 'express';
import 'dotenv/config';
import livrosRoutes from './routes/livroRoute.js';
import projetoRoutes from './routes/projetoRoute.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('🚀 API funcionando');
});

app.use('/', livrosRoutes);
app.use('/', projetoRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});