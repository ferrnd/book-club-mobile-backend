import QuizModel from '../models/quizModel.js';

export const criar = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ error: 'Corpo da requisição vazio. Envie os dados!' });
        }

        const {
            pergunta_pt,
            pergunta_en,
            opcaoA_pt,
            opcaoA_en,
            opcaoB_pt,
            opcaoB_en,
            opcaoC_pt,
            opcaoC_en,
            opcaoD_pt,
            opcaoD_en,
            opcaoE_pt,
            opcaoE_en,
            resposta,
            explicacao_pt,
            explicacao_en
        } = req.body;

        if (!pergunta_pt){
            return res.status(400).json({ error: 'O campo "pergunta_pt" é obrigatório!' });
        }
        if (!pergunta_en){
            return res.status(400).json({ error: 'O campo "pergunta_en" é obrigatório!' });
        }
        if (!opcaoA_pt){
            return res.status(400).json({ error: 'O campo "opcaoA_pt" é obrigatório!' });
        }
        if (!opcaoA_en){
            return res.status(400).json({ error: 'O campo "opcaoA_en" é obrigatório!' });
        }
        if (!opcaoB_pt){
            return res.status(400).json({ error: 'O campo "opcaoB_pt" é obrigatório!' });
        }
        if (!opcaoB_en) {
            return res.status(400).json({ error: 'O campo "opcaoB_en" é obrigatório!' });
        }
        if (!opcaoC_pt) {
            return res.status(400).json({ error: 'O campo "opcaoC_pt" é obrigatório!' });
        }
        if (!opcaoC_en) {
            return res.status(400).json({ error: 'O campo "opcaoC_en" é obrigatório!' });
        }
        if (!opcaoD_pt) {
            return res.status(400).json({ error: 'O campo "opcaoD_pt" é obrigatório!' });
        }
        if (!opcaoD_en) {
            return res.status(400).json({ error: 'O campo "opcaoD_en" é obrigatório!' });
        }
        if (!opcaoE_pt) {
            return res.status(400).json({ error: 'O campo "opcaoE_pt" é obrigatório!' });
        }
        if (!opcaoE_en) {
            return res.status(400).json({ error: 'O campo "opcaoE_en" é obrigatório!' });
        }
        if (!resposta) {
            return res.status(400).json({ error: 'O campo "resposta" é obrigatório!' });
        }
        if (!explicacao_pt) {
            return res.status(400).json({ error: 'O campo "explicacao_pt" é obrigatório!' });
        }
        if (!explicacao_en) {
            return res.status(400).json({ error: 'O campo "explicacao_en" é obrigatório!' });
        }

        const quiz = new QuizModel({ pergunta_pt, pergunta_en, opcaoA_pt, opcaoA_en, opcaoB_pt, opcaoB_en, opcaoC_pt, opcaoC_en, opcaoD_pt, opcaoD_en, opcaoE_pt, opcaoE_en, resposta, explicacao_pt, explicacao_en });
        const data = await quiz.criar();

        return res.status(201).json({ message: 'Registro criado com sucesso!', data });
    } catch (error) {
        console.error('Erro ao criar:', error);
        return res.status(500).json({ error: 'Erro interno ao salvar o registro.' });
    }
};

export const buscarTodos = async (req, res) => {
    try {
        const registros = await QuizModel.buscarTodos(req.query);

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

        const quiz = await QuizModel.buscarPorId(parseInt(id));

        if (!quiz) {
            return res.status(404).json({ error: 'Registro não encontrado.' });
        }

        return res.status(200).json({ data: quiz });
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

        const quiz = await QuizModel.buscarPorId(parseInt(id));

        if (!quiz) {
            return res.status(404).json({ error: 'Registro não encontrado para atualizar.' });
        }

        if (req.body.pergunta_pt !== undefined) {
            quiz.pergunta_pt = req.body.pergunta_pt;
        }
        if (req.body.pergunta_en !== undefined) {
            quiz.pergunta_en = req.body.pergunta_en;
        }
        if (req.body.opcaoA_pt !== undefined) {
            quiz.opcaoA_pt = req.body.opcaoA_pt;
        }
        if (req.body.opcaoA_en !== undefined) {
            quiz.opcaoA_en = req.body.opcaoA_en;
        }
        if (req.body.opcaoC_pt !== undefined) {
            quiz.opcaoC_pt = req.body.opcaoC_pt;
        }
        if (req.body.opcaoC_en !== undefined) {
            quiz.opcaoC_en = req.body.opcaoC_en;
        }
        if (req.opcaoD_pt !== undefined) {
            quiz.opcaoD_pt = req.opcaoD_pt;
        }
        if (req.body.opcaoD_en !== undefined) {
            quiz.opcaoD_en = req.body.opcaoD_en;
        }
        if (req.body.opcaoE_pt !== undefined) {
            quiz.opcaoE_pt = req.body.opcaoE_pt;
        }
        if (req.body.opcaoE_en !== undefined) {
            quiz.opcaoE_en = req.body.opcaoE_en;
        }
        if (req.body.resposta !== undefined) {
            quiz.resposta = req.body.resposta;
        }
        if (req.body.explicacao_pt !== undefined) {
            quiz.explicacao_pt = req.body.explicacao_pt;
        }
        if (req.body.explicacao_en !== undefined) {
            quiz.explicacao_en = req.body.explicacao_en;
        }

        const data = await quiz.atualizar();

        return res.status(200).json({ message: `O registro "${data.pergunta_pt}" foi atualizado com sucesso!`, data });
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

        const quiz = await QuizModel.buscarPorId(parseInt(id));

        if (!quiz) {
            return res.status(404).json({ error: 'Registro não encontrado para deletar.' });
        }

        await quiz.deletar();

        return res.status(200).json({ message: `O registro "${quiz.pergunta_pt}" foi deletado com sucesso!`, deletado: quiz });
    } catch (error) {
        console.error('Erro ao deletar:', error);
        return res.status(500).json({ error: 'Erro ao deletar registro.' });
    }
};
