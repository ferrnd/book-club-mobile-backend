import CitacaoModel from "../models/citacaoModel.js";
import citacaoModel from "../models/citacaoModel.js";

export const buscarTodos = async (req, res) => {
  try {
    const registros = await CitacaoModel.buscarTodos(req.query);

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

    const citacao = await CitacaoModel.buscarPorId(parseInt(id));

    if (!citacao) {
      return res.status(404).json({ error: "Registro não encontrado." });
    }

    return res.status(200).json({ data: citacao });
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

    const citacao = await CitacaoModel.buscarPorId(parseInt(id));

    if (!citacao) {
      return res
        .status(404)
        .json({ error: "Registro não encontrado para atualizar." });
    }

    if (req.body.texto_pt !== undefined) {
      citacao.texto_pt = req.body.texto_pt;
    }
    if (req.body.texto_en !== undefined) {
      citacao.texto_en = req.body.texto_en;
    }
    if (req.body.contoId !== undefined) {
      citacao.contoId = req.body.contoId;
    }
    if (req.body.personagem !== undefined) {
      citacao.personagem = req.body.personagem;
    }
    if (req.body.explicacao_pt !== undefined) {
      citacao.explicacao_pt = req.body.explicacao_pt;
    }
    if (req.body.explicacao_en !== undefined) {
      citacao.explicacao_en = req.body.explicacao_en;
    }

    const data = await citacao.atualizar();

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
