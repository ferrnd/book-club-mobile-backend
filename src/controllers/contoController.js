import ContoModel from "../models/contoModel.js";

export const buscarTodos = async (req, res) => {
  try {
    const registros = await ContoModel.buscarTodos(req.query);

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

    const conto = await ContoModel.buscarPorId(parseInt(id));

    if (!conto) {
      return res.status(404).json({ error: "Registro não encontrado." });
    }

    return res.status(200).json({ data: conto });
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

    const conto = await ContoModel.buscarPorId(parseInt(id));

    if (!conto) {
      return res
        .status(404)
        .json({ error: "Registro não encontrado para atualizar." });
    }

    if (req.body.titulo_pt !== undefined) {
      conto.titulo_pt = req.body.titulo_pt;
    }
    if (req.body.titulo_en !== undefined) {
      conto.titulo_en = req.body.titulo_en;
    }
    if (req.body.resumo_pt !== undefined) {
      conto.resumo_pt = req.body.resumo_pt;
    }
    if (req.body.resumo_en !== undefined) {
      conto.resumo_en = req.body.resumo_en;
    }
    if (req.body.analise_pt !== undefined) {
      conto.analise_pt = req.body.analise_pt;
    }
    if (req.body.analise_en !== undefined) {
      conto.analise_en = req.body.analise_en;
    }
    

    const data = await conto.atualizar();

    return res
      .status(200)
      .json({
        message: `O registro "${data.titulo_pt}" foi atualizado com sucesso!`,
        data,
      });
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    return res.status(500).json({ error: "Erro ao atualizar registro." });
  }
};
