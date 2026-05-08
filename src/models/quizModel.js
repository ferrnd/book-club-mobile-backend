import prisma from '../lib/services/prismaClient.js';

export default class QuizModel {
    constructor({
        id = null,
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
        explicacao_en,
    } = {}) {
        this.id = id;
        this.pergunta_pt = pergunta_pt;
        this.pergunta_en = pergunta_en;
        this.opcaoA_pt = opcaoA_pt;
        this.opcaoA_en = opcaoA_en;
        this.opcaoB_pt = opcaoB_pt;
        this.opcaoB_en = opcaoB_en;
        this.opcaoC_pt = opcaoC_pt;
        this.opcaoC_en = opcaoC_en;
        this.opcaoD_pt = opcaoD_pt;
        this.opcaoD_en = opcaoD_en;
        this.opcaoE_pt = opcaoE_pt;
        this.opcaoE_pt = opcaoE_pt;
        this.opcaoE_en = opcaoE_en;
        this.resposta = resposta;
        this.explicacao_pt = explicacao_pt;
        this.explicacao_en = explicacao_en;
    }

    async criar() {
        return prisma.quiz.create({
            data: {
                pergunta_pt: this.pergunta_pt,
                pergunta_en: this.pergunta_en,
                opcaoA_pt: this.opcaoA_pt,
                opcaoA_en: this.opcaoA_en,
                opcaoB_pt: this.opcaoB_pt,
                opcaoB_en: this.opcaoB_en,
                opcaoC_pt: this.opcaoC_pt,
                opcaoC_en: this.opcaoC_en,
                opcaoD_pt: this.opcaoD_pt,
                opcaoD_en: this.opcaoD_en,
                opcaoE_pt: this.opcaoE_pt,
                opcaoE_en: this.opcaoE_en,
                resposta: this.resposta,
                explicacao_pt: this.explicacao_pt,
                explicacao_en: this.explicacao_en,

            },
        });
    }

    async atualizar() {
        return prisma.quiz.update({
            where: { id: this.id },
            data: {
                pergunta_pt: this.pergunta_pt,
                pergunta_en: this.pergunta_en,
                opcaoA_pt: this.opcaoA_pt,
                opcaoA_en: this.opcaoA_en,
                opcaoB_pt: this.opcaoB_pt,
                opcaoB_en: this.opcaoB_en,
                opcaoC_pt: this.opcaoC_pt,
                opcaoC_en: this.opcaoC_en,
                opcaoD_pt: this.opcaoD_pt,
                opcaoD_en: this.opcaoD_en,
                opcaoE_pt: this.opcaoE_pt,
                opcaoE_en: this.opcaoE_en,
                resposta: this.resposta,
                explicacao_pt: this.explicacao_pt,
                explicacao_en: this.explicacao_en,
            },
        });
    }

    async deletar() {
        return prisma.quiz.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.pergunta_pt) {
            where.pergunta_pt = { contains: filtros.pergunta_pt, mode: 'insensitive' };
        }
        if (filtros.pergunta_en) {
            where.pergunta_en = { contains: filtros.pergunta_en, mode: 'insensitive' };
        }
        if (filtros.opcaoA_pt) {
            where.opcaoA_pt = { contains: filtros.opcaoA_pt, mode: 'insensitive' };
        }
        if (filtros.opcaoA_en) {
            where.opcaoA_en = { contains: filtros.opcaoA_en, mode: 'insensitive' };
        }
        if (filtros.opcaoB_pt) {
            where.opcaoB_pt = { contains: filtros.opcaoB_pt, mode: 'insensitive' };
        }
        if (filtros.opcaoB_en) {
            where.opcaoB_en = { contains: filtros.opcaoB_en, mode: 'insensitive' };
        }
        if (filtros.opcaoC_pt) {
            where.opcaoC_pt = { contains: filtros.opcaoC_pt, mode: 'insensitive' };
        }
        if (filtros.opcaoC_en) {
            where.opcaoC_en = { contains: filtros.opcaoC_en, mode: 'insensitive' };
        }
        if (filtros.opcaoD_pt) {
            where.opcaoD_pt = { contains: filtros.opcaoD_pt, mode: 'insensitive' };
        }
        if (filtros.opcaoD_en) {
            where.opcaoD_en = { contains: filtros.opcaoD_en, mode: 'insensitive' };
        }
        if (filtros.opcaoE_pt) {
            where.opcaoE_pt = { contains: filtros.opcaoE_pt, mode: 'insensitive' };
        }
        if (filtros.opcaoE_en) {
            where.opcaoE_en = { contains: filtros.opcaoE_en, mode: 'insensitive' };
        }
        if (filtros.resposta) {
            where.resposta = { contains: filtros.resposta, mode: 'insensitive' };
        }
        if (filtros.explicacao_pt) {
            where.explicacao_pt = { contains: filtros.explicacao_pt, mode: 'insensitive' };
        }
        if (filtros.explicacao_en) {
            where.explicacao_en = { contains: filtros.explicacao_en, mode: 'insensitive' };
        }


        return prisma.quiz.findMany({ where });
    }

    static async buscarPorId(id) {
        const data = await prisma.quiz.findUnique({ where: { id } });
        if (!data) {
            return null;
        }
        return new QuizModel(data);
    }
}
