import PersonagemModel from '../models/personagemModel.js';

export const criar = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ error: 'Corpo da requisição vazio. Envie os dados!' });
        }

        const { nome, caracteristicas_pt, caracteristicas_en, descricao_pt, descricao_en } =
            req.body;

        if (!nome){
            return res.status(400).json({ error: 'O campo "nome" é obrigatório!' });
        }
        if (!caracteristicas_pt){
            return res.status(400).json({ error: 'O campo "caracteristicas_pt" é obrigatório!' });
        }
        if (!caracteristicas_en) {
            return res.status(400).json({ error: 'O campo "caracteristicas_en" é obrigatório!' });
        }
        if (!descricao_pt) {
            return res.status(400).json({ error: 'O campo "descricao_pt" é obrigatório!' });
        }
        if (!descricao_en) {
            return res.status(400).json({ error: 'O campo "descricao_en" é obrigatório!' });
        }


        const personagem = new PersonagemModel({
            nome,
            caracteristicas_pt,
            caracteristicas_en,
            descricao_pt,
            descricao_en
        });
        const data = await personagem.criar();

        return res.status(201).json({ message: 'personagem criado com sucesso!', data });
    } catch (error) {
        console.error('Erro ao criar:', error);
        return res.status(500).json({ error: 'Erro interno ao salvar o registro.' });
    }
};

export const buscarTodos = async (req, res) => {
    try {
        const registros = await PersonagemModel.buscarTodos(req.query);

        if (!registros || registros.length === 0) {
            return res.status(400).json({ message: 'Nenhum registro de personagem encontrado.' });
        }

        return res.status(200).json(registros);
    } catch (error) {
        console.error('Erro ao buscar:', error);
        return res.status(500).json({ error: 'Erro ao buscar personagem.' });
    }
};

export const buscarPorId = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ error: 'O ID do personagem não é um número válido.' });
        }

        const personagem = await PersonagemModel.buscarPorId(parseInt(id));

        if (!personagem) {
            return res.status(404).json({ error: 'personagem não encontrado.' });
        }

        return res.status(200).json({ data: personagem });
    } catch (error) {
        console.error('Erro ao buscar:', error);
        return res.status(500).json({ error: 'Erro ao buscar personagem.' });
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

        const personagem = await PersonagemModel.buscarPorId(parseInt(id));

        if (!personagem) {
            return res.status(404).json({ error: 'personagem não encontrado para atualizar.' });
        }

        if (req.body.nome !== undefined) {
            personagem.nome = req.body.nome;
        }
        if (req.body.caracteristicas_pt !== undefined) {
            personagem.caracteristicas_pt = req.body.caracteristicas_pt;
        }
        if (req.body.caracteristicas_en !== undefined) {
            personagem.caracteristicas_en = req.body.caracteristicas_en;
        }
        if (req.body.descricao_pt !== undefined) {
            personagem.descricao_pt = req.body.descricao_pt;
        }
        if (req.body.descricao_en !== undefined) {
            personagem.descricao_en = req.body.descricao_en;
        }


        const data = await personagem.atualizar();

        return res.status(200).json({ message: `O registro "${data.nome}" foi atualizado com sucesso!`, data });
    } catch (error) {
        console.error('Erro ao atualizar:', error);
        return res.status(500).json({ error: 'Erro ao atualizar personagem.' });
    }
};

export const deletar = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido.' });
        }

        const personagem = await PersonagemModel.buscarPorId(parseInt(id));

        if (!personagem) {
            return res.status(404).json({ error: 'personagem não encontrado para deletar.' });
        }

        await personagem.deletar();

        return res.status(200).json({ message: `O personagem "${personagem.nome}" foi deletado com sucesso!`, deletado: personagem });
    } catch (error) {
        console.error('Erro ao deletar:', error);
        return res.status(500).json({ error: 'Erro ao deletar personagem.' });
    }
};
