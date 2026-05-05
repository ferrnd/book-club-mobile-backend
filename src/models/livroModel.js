import prisma from '../lib/services/prismaClient.js';

export default class LivroModel {
    constructor({ id = null, titulo, capa = null, autor = null } = {}) {
        this.id = id;
        this.titulo = titulo;
        this.capa = capa;
        this.autor = autor;
    }

    async criar() {
        return prisma.livro.create({
            data: {
                titulo: this.titulo,
                capa: this.capa,
                autor: this.autor,
            },
        });
    }

    async atualizar() {
        return prisma.livro.update({
            where: { id: this.id },
            data: { titulo: this.titulo, capa: this.capa, autor: this.autor },
        });
    }

    async deletar() {
        return prisma.livro.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.titulo) {
            where.titulo = { contains: filtros.titulo, mode: 'insensitive' };
        }
        if (filtros.autor) {
            where.autor = { contains: filtros.autor, mode: 'insensitive' };
        }

        return prisma.livro.findMany({ where });
    }

    static async buscarPorId(id) {
        const data = await prisma.livro.findUnique({ where: { id } });
        if (!data) {
            return null;
        }
        return new LivroModel(data);
    }
}