import prisma from "../lib/services/prismaClient.js";

export default class MembroModel {
  constructor({
    id = null,
    nome,
    fotoUrl,
    curso_pt = null,
    curso_en = null,
    email = null,
    github = null,
    linkedin = null,
  } = {}) {
    this.id = id;
    this.nome = nome;
    this.fotoUrl = fotoUrl;
    this.curso_pt = curso_pt;
    this.curso_en = curso_en;
    this.email = email;
    this.github = github;
    this.linkedin = linkedin;
  }

  async atualizar() {
    return prisma.membro.update({
      where: { id: this.id },
      data: {
        nome: this.nome,
        fotoUrl: this.fotoUrl,
        curso_pt: this.curso_pt,
        curso_en: this.curso_en,
        email: this.email,
        github: this.github,
        linkedin: this.linkedin,
      },
    });
  }
  static async buscarTodos() {
    return prisma.membro.findMany();
  }

  static async buscarPorId(id) {
    const data = await prisma.membro.findUnique({ where: { id } });
    if (!data) {
      return null;
    }
    return new MembroModel(data);
  }
}
