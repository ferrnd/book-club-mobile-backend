import prisma from "../lib/services/prismaClient.js";

export default class ContoModel {
  constructor({
    id = null,
    titulo_pt,
    titulo_en,
    resumo_pt = null,
    resumo_en = null,
    analise_pt = null,
    analise_en = null,
  } = {}) {
    this.id = id;
    this.titulo_pt = titulo_pt;
    this.titulo_en = titulo_en;
    this.resumo_pt = resumo_pt;
    this.resumo_en = resumo_en;
    this.analise_pt = analise_pt;
    this.analise_en = analise_en;
  }

  async atualizar() {
    return prisma.conto.update({
      where: { id: this.id },
      data: {
        titulo_pt: this.titulo_pt,
        titulo_en: this.titulo_en,
        resumo_pt: this.resumo_pt,
        resumo_en: this.resumo_en,
        analise_pt: this.analise_pt,
        analise_en: this.analise_en,
      },
    });
  }
  static async buscarTodos() {
    return prisma.conto.findMany();
  }

  static async buscarPorId(id) {
    const data = await prisma.conto.findUnique({ where: { id } });
    if (!data) {
      return null;
    }
    return new ContoModel(data);
  }
}
