import prisma from "../lib/services/prismaClient.js";

export default class ProjetoModel {
  constructor({
    id = null,
    nome_pt,
    nome_en,
    apresentacao_pt = null,
    apresentacao_en = null,
    objetivo_pt = null,
    objetivo_en = null,
    
  } = {}) {
    this.id = id;
    this.nome_pt = nome_pt;
    this.nome_en = nome_en;
    this.apresentacao_pt = apresentacao_pt;
    this.apresentacao_en = apresentacao_en;
    this.objetivo_pt = objetivo_pt;
    this.objetivo_en = objetivo_en;
  }

  async atualizar() {
    return prisma.projeto.update({
      where: { id: this.id },
      data: {
        nome_pt: this.nome_pt,
        nome_en: this.nome_en,
        apresentacao_pt: this.apresentacao_pt,
        apresentacao_en: this.apresentacao_en,
        objetivo_pt: this.objetivo_pt,
        objetivo_en: this.objetivo_en,
      },
    });
  }
  static async buscarTodos() {
    return prisma.projeto.findMany();
  }

  static async buscarPorId(id) {
    const data = await prisma.projeto.findUnique({ where: { id } });
    if (!data) {
      return null;
    }
    return new projetoModel(data);
  }
}
