import MembroModel from "../models/membroModel.js";

export const buscarTodos = async (req, res) => {
  try {
    const registros = await MembroModel.buscarTodos(req.query);

    if (!registros || registros.length === 0) {
      return res.status(400).json({ message: "Nenhum registro encontrado." });
    }

    return res.status(200).json(registros);
  } catch (error) {
    console.error("Erro ao buscar:", error);
    return res.status(500).json({ error: "Erro ao buscar registros." });
  }
};

export const buscarPorId = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      return res
        .status(400)
        .json({ error: "O ID enviado não é um número válido." });
    }

    const membro = await MembroModel.buscarPorId(parseInt(id));

    if (!membro) {
      return res.status(404).json({ error: "Registro não encontrado." });
    }

    return res.status(200).json({ data: membro });
  } catch (error) {
    console.error("Erro ao buscar:", error);
    return res.status(500).json({ error: "Erro ao buscar registro." });
  }
};

export const atualizar = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido." });
    }

    if (!req.body) {
      return res
        .status(400)
        .json({ error: "Corpo da requisição vazio. Envie os dados!" });
    }

    const membro = await MembroModel.buscarPorId(parseInt(id));

    if (!membro) {
      return res
        .status(404)
        .json({ error: "Registro não encontrado para atualizar." });
    }

    if (req.body.nome !== undefined) {
      membro.nome = req.body.nome;
    }
    if (req.body.fotoUrl !== undefined) {
      membro.fotoUrl = req.body.fotoUrl;
    }
    if (req.body.curso_pt !== undefined) {
      membro.curso_pt = req.body.curso_pt;
    }
    if (req.body.curso_en !== undefined) {
      membro.curso_en = req.body.curso_en;
    }
    if (req.body.email !== undefined) {
      membro.email = req.body.email;
    }
    if (req.body.linkedin !== undefined) {
      membro.linkedin = req.body.linkedin;
    }
    if (req.body.github !== undefined) {
      membro.github = req.body.github;
    }

    const data = await membro.atualizar();

    return res.status(200).json({
      message: `O registro "${data.nome}" foi atualizado com sucesso!`,
      data,
    });
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    return res.status(500).json({ error: "Erro ao atualizar registro." });
  }
};
