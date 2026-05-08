import express from 'express';
import 'dotenv/config';
import livrosRoutes from './routes/livroRoute.js';
import projetoRoutes from './routes/projetoRoute.js';
import autorRoutes from './routes/autorRoute.js';
import contoRoutes from './routes/contoRoute.js';
import membroRoutes from './routes/membroRoute.js';
<<<<<<< HEAD
import citacaoRoutes from './routes/citacaoRoute.js'
=======
import dicaRoutes from './routes/dicaRoute.js'
>>>>>>> a149da6f3493155d54d3cb30f886bfb2482ba8e2

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
<<<<<<< HEAD
app.use('/', citacaoRoutes);
=======
app.use('/', dicaRoutes);
>>>>>>> a149da6f3493155d54d3cb30f886bfb2482ba8e2

app.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
