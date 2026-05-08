import videoaulaModel from "../models/videoaulaModel.js";

export const buscarTodos = async (req, res) => {
  try {
    const registros = await videoaulaModel.buscarTodos(req.query);

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

    const videoaula = await videoaulaModel.buscarPorId(parseInt(id));

    if (!videoaula) {
      return res.status(404).json({ error: "Registro não encontrado." });
    }

    return res.status(200).json({ data: videoaula });
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

    const videoaula = await videoaulaModel.buscarPorId(parseInt(id));

    if (!videoaula) {
      return res
        .status(404)
        .json({ error: "Registro não encontrado para atualizar." });
    }
    if (req.body.titulo_pt !== undefined) {
      videoaula.titulo_pt = req.body.titulo_pt;
    }
    if (req.body.titulo_en !== undefined) {
      videoaula.titulo_en = req.body.titulo_en;
    }
    if (req.body.descricao_pt !== undefined) {
      videoaula.descricao_pt = req.body.descricao_pt;
    }
    if (req.body.descricao_en !== undefined) {
      videoaula.descricao_en = req.body.descricao_en;
    }
    if (req.body.url !== undefined) {
      videoaula.url = req.body.url;
    }

    const data = await videoaula.atualizar();

    return res
      .status(200)
      .json({
        message: `O registro "${data.nome}" foi atualizado com sucesso!`,
        data,
      });
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    return res.status(500).json({ error: "Erro ao atualizar registro." });
  }
};
