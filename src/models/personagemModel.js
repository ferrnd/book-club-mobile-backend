import prisma from "../lib/services/prismaClient.js";

export default class personagemModel {
  constructor({
    id = null,
    nome,
    caracteristicas_pt,
    caracteristicas_en,
    descricao_pt,
    descricao_en,
    contoId,
  } = {}) {
    this.id = id;
    this.nome = nome;
    this.caracteristicas_pt = caracteristicas_pt;
    this.caracteristicas_en = caracteristicas_en;
    this.descricao_pt = descricao_pt;
    this.descricao_en = descricao_en;
    this.contoId = contoId;
  }

  async criar() {
    return prisma.personagem.create({
      data: {
        nome: this.nome,
        caracteristicas_pt: this.caracteristicas_pt,
        caracteristicas_en: this.caracteristicas_en,
        descricao_pt: this.descricao_pt,
        descricao_en: this.descricao_en,
        conto: {
          connect: { id: this.contoId } 
        },
      },
    });
  }

  async atualizar() {
    return prisma.personagem.update({
      where: { id: this.id },
      data: {
        nome: this.nome,
        caracteristicas_pt: this.caracteristicas_pt,
        caracteristicas_en: this.caracteristicas_en,
        descricao_pt: this.descricao_pt,
        descricao_en: this.descricao_en,
      },
    });
  }

  async deletar() {
    return prisma.personagem.delete({ where: { id: this.id } });
  }

  static async buscarTodos(filtros = {}) {
    const where = {};

    if (filtros.nome) {
      where.nome = { contains: filtros.nome, mode: "insensitive" };
    }
    if (filtros.caracteristicas_pt) {
      where.caracteristicas_pt = {
        contains: filtros.caracteristicas_pt,
        mode: "insensitive",
      };
    }
    if (filtros.caracteristicas_en) {
      where.caracteristicas_en = {
        contains: filtros.caracteristicas_en,
        mode: "insensitive",
      };
    }
    if (filtros.descricao_pt) {
      where.descricao_pt = {
        contains: filtros.descricao_pt,
        mode: "insensitive",
      };
    }
    if (filtros.descricao_en) {
      where.descricao_en = {
        contains: filtros.descricao_en,
        mode: "insensitive",
      };
    }

    return prisma.personagem.findMany({ where });
  }

  static async buscarPorId(id) {
    const data = await prisma.personagem.findUnique({ where: { id } });
    if (!data) {
      return null;
    }
    return new personagemModel(data);
  }
}
