import prisma from "../lib/services/prismaClient.js";

export default class CitacaoModel {
  constructor({
    id = null,
    texto_pt,
    texto_en,
    personagem,
    explicacao_pt = null,
    explicacao_eng = null,
  } = {}) {
    this.id = id;
    this.texto_pt = texto_pt;
    this.texto_en = texto_en;
    this.personagem = personagem;
    this.explicacao_pt = explicacao_pt;
    this.explicacao_eng = explicacao_eng;
  }

  async atualizar() {
    return prisma.citacao.update({
      where: { id: this.id },
      data: {
        texto_pt: this.texto_pt,
        texto_en: this.texto_en,
        personagem: this.personagem,
        explicacao_pt: this.explicacao_pt,
        explicacao_en: this.explicacao_en,
      },
    });
  }

  static async buscarTodos() {
    return prisma.citacao.findMany({
    include: {
      conto: {
        select: {
          titulo_pt: true,
          titulo_en: true
        }
      }
    }
  });
  }
  static async buscarPorId(id) {
    const data = await prisma.citacao.findUnique({ where: { id } });
    if (!data) {
      return null;
    }
    return new CitacaoModel(data);
  }
}
