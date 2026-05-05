import LivroModel from '../models/livroModel.js';

export const criar = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ error: 'Corpo da requisição vazio. Envie os dados!' });
        }

        const { titulo, capa, autor } = req.body;

        if (!titulo){
            return res.status(400).json({ error: 'O campo "titulo" é obrigatório!' });
        }
        if (autor === undefined || autor === null) {
            return res.status(400).json({ error: 'O campo "autor" é obrigatório!' });
        }

        const livro = new LivroModel({ titulo, capa, autor });
        const data = await livro.criar();

        return res.status(201).json({ message: 'Registro criado com sucesso!', data });
    } catch (error) {
        console.error('Erro ao criar:', error);
        return res.status(500).json({ error: 'Erro interno ao salvar o registro.' });
    }
};

export const buscarTodos = async (req, res) => {
    try {
        const registros = await LivroModel.buscarTodos(req.query);

        if (!registros || registros.length === 0) {
            return res.status(400).json({ message: 'Nenhum registro encontrado.' });
        }

        return res.status(200).json(registros);
    } catch (error) {
        console.error('Erro ao buscar:', error);
        return res.status(500).json({ error: 'Erro ao buscar registros.' });
    }
};

export const buscarPorId = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ error: 'O ID enviado não é um número válido.' });
        }

        const livro = await LivroModel.buscarPorId(parseInt(id));

        if (!livro) {
            return res.status(404).json({ error: 'Registro não encontrado.' });
        }

        return res.status(200).json({ data: livro });
    } catch (error) {
        console.error('Erro ao buscar:', error);
        return res.status(500).json({ error: 'Erro ao buscar registro.' });
    }
};

export const atualizar = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido.' });
        }

        if (!req.body) {
            return res.status(400).json({ error: 'Corpo da requisição vazio. Envie os dados!' });
        }

        const livro = await LivroModel.buscarPorId(parseInt(id));

        if (!livro) {
            return res.status(404).json({ error: 'Registro não encontrado para atualizar.' });
        }

        if (req.body.titulo !== undefined) {
            livro.titulo = req.body.titulo;
        }
        if (req.body.capa !== undefined) {
            livro.capa = req.body.capa;
        }
        if (req.body.autor !== undefined) {
            livro.autor = req.body.autor;
        }

        const data = await livro.atualizar();

        return res.status(200).json({ message: `O registro "${data.titulo}" foi atualizado com sucesso!`, data });
    } catch (error) {
        console.error('Erro ao atualizar:', error);
        return res.status(500).json({ error: 'Erro ao atualizar registro.' });
    }
};

export const deletar = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido.' });
        }

        const livro = await LivroModel.buscarPorId(parseInt(id));

        if (!livro) {
            return res.status(404).json({ error: 'Registro não encontrado para deletar.' });
        }

        await livro.deletar();

        return res.status(200).json({ message: `O registro "${livro.titulo}" foi deletado com sucesso!`, deletado: livro });
    } catch (error) {
        console.error('Erro ao deletar:', error);
        return res.status(500).json({ error: 'Erro ao deletar registro.' });
    }
};