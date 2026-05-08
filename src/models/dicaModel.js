import prisma from "../lib/services/prismaClient.js";

export default class DicaModel {
  constructor({ id = null, tipo_pt, tipo_en, conteudo_pt, conteudo_en } = {}) {
    this.id = id;
    this.tipo_pt = tipo_pt;
    this.tipo_en = tipo_en;
    this.conteudo_pt = conteudo_pt;
    this.conteudo_en = conteudo_en;
  }

  async criar() {
    return prisma.dica.create({
      data: {
        tipo_pt: this.tipo_pt,
        tipo_en: this.tipo_en,
        conteudo_pt: this.conteudo_pt,
        conteudo_en: this.conteudo_en,
      },
    });
  }

  async atualizar() {
    return prisma.dica.update({
      where: { id: this.id },
      data: {
        tipo_pt: this.tipo_pt,
        tipo_en: this.tipo_en,
        conteudo_pt: this.conteudo_pt,
        conteudo_en: this.conteudo_en,
      },
    });
  }

  async deletar() {
    return prisma.dica.delete({ where: { id: this.id } });
  }

  static async buscarTodos(filtros = {}) {
    const where = {};

    if (filtros.tipo_pt) {
      where.tipo_pt = { contains: filtros.tipo_pt, mode: "insensitive" };
    }
    if (filtros.tipo_en) {
      where.tipo_en = { contains: filtros.tipo_en, mode: "insensitive" };
    }
    if (filtros.conteudo_pt) {
      where.conteudo_pt = {
        contains: filtros.conteudo_pt,
        mode: "insensitive",
      };
    }
    if (filtros.conteudo_en) {
      where.conteudo_en = {
        contains: filtros.conteudo_en,
        mode: "insensitive",
      };
    }

    return prisma.dica.findMany({ where });
  }

  static async buscarPorId(id) {
    const data = await prisma.dica.findUnique({ where: { id } });
    if (!data) {
      return null;
    }
    return new DicaModel(data);
  }
}
