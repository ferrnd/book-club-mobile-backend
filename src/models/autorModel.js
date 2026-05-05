import prisma from "../lib/services/prismaClient.js";

export default class AutorModel {
  constructor({
    id = null,
    nome,
    fotoUrl,
    nascimento = null,
    nacionalidade_pt = null,
    nacionalidade_en = null,
    biografia_pt = null,
    biografia_en = null,
    estilo_escrita_pt = null,
    estilo_escrita_en = null,
  } = {}) {
    this.id = id;
    this.nome = nome;
    this.fotoUrl = fotoUrl;
    this.nascimento = nascimento;
    this.nacionalidade_pt = nacionalidade_pt;
    this.nacionalidade_en = nacionalidade_en;
    this.biografia_pt = biografia_pt;
    this.biografia_en = biografia_en;
    this.estilo_escrita_pt = estilo_escrita_pt;
    this.estilo_escrita_en = estilo_escrita_en;
  }

  async atualizar() {
    return prisma.autor.update({
      where: { id: this.id },
      data: {
        nome: this.nome,
        fotoUrl: this.fotoUrl,
        nascimento: this.nascimento,
        nacionalidade_pt: this.nacionalidade_pt,
        nacionalidade_en: this.nacionalidade_en,
        biografia_pt: this.biografia_pt,
        biografia_en: this.biografia_en,
        estilo_escrita_pt: this.estilo_escrita_pt,
        estilo_escrita_en: this.estilo_escrita_en,
      },
    });
  }
  static async buscarTodos() {
    return prisma.autor.findMany();
  }

  static async buscarPorId(id) {
    const data = await prisma.autor.findUnique({ where: { id } });
    if (!data) {
      return null;
    }
    return new AutorModel(data);
  }
}
