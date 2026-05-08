import prisma from '../lib/services/prismaClient.js';

export default class videoaulaModel {
    constructor({
        id = null,
        titulo_pt = null,
        titulo_en = null,
        descricao_pt = null,
        descricao_en = null,
        url,
    } = {}) {
        this.id = id;
        this.titulo_pt = titulo_pt;
        this.titulo_en = titulo_en;
        this.descricao_pt = descricao_pt;
        this.descricao_en = descricao_en;
        this.url = url;
    }

    async atualizar() {
        return prisma.videoAula.update({
            where: { id: this.id },
            data: {
                titulo_pt: this.titulo_pt,
                titulo_en: this.titulo_en,
                descricao_pt: this.descricao_pt,
                descricao_en: this.descricao_en,
                url: this.url,
            },
        });
    }

    static async buscarTodos() {
        const data = await prisma.videoAula.findMany();
        return data.map((item) => new videoaulaModel(item));
    }

    static async buscarPorId(id) {
        const data = await prisma.videoAula.findUnique({ where: { id } });
        if (!data) {
            return null;
        }
        return new videoaulaModel(data);
    }
}
