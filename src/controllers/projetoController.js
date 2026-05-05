import ProjetoModel from "../models/projetoModel.js";

export const buscarTodos = async (req, res) => {
  try {
    const registros = await ProjetoModel.buscarTodos(req.query);

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

    const projeto = await ProjetoModel.buscarPorId(parseInt(id));

    if (!projeto) {
      return res.status(404).json({ error: "Registro não encontrado." });
    }

    return res.status(200).json({ data: projeto });
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

    const projeto = await ProjetoModel.buscarPorId(parseInt(id));

    if (!projeto) {
      return res
        .status(404)
        .json({ error: "Registro não encontrado para atualizar." });
    }

    if (req.body.nome_pt !== undefined) {
      projeto.nome_pt = req.body.nome_pt;
    }
    if (req.body.nome_en !== undefined) {
      projeto.nome_en = req.body.nome_en;
    }
    if (req.body.apresentacao_pt !== undefined) {
      projeto.apresentacao_pt = req.body.apresentacao_pt;
    }
    if (req.body.apresentacao_en !== undefined) {
      projeto.apresentacao_en = req.body.apresentacao_en;
    }
    if (req.body.objetivo_pt !== undefined) {
      projeto.objetivo_pt = req.body.objetivo_pt;
    }
    if (req.body.objetivo_en !== undefined) {
      projeto.objetivo_en = req.body.objetivo_en;
    }

    const data = await projeto.atualizar();

    return res
      .status(200)
      .json({
        message: `O registro "${data.nome_pt}" foi atualizado com sucesso!`,
        data,
      });
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    return res.status(500).json({ error: "Erro ao atualizar registro." });
  }
};
