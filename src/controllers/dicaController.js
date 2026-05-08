import DicaModel from "../models/dicaModel.js";

export const criar = async (req, res) => {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json({ error: "Corpo da requisição vazio. Envie os dados!" });
    }

    const { tipo_pt, tipo_en, conteudo_pt, conteudo_en } = req.body;

    if (!tipo_pt) {
      return res
        .status(400)
        .json({ error: 'O campo "tipo em português" é obrigatório!' });
    }
    if (!tipo_en) {
      return res
        .status(400)
        .json({ error: 'O campo "tipo em inglês" é obrigatório!' });
    }
    if (!conteudo_pt) {
      return res
        .status(400)
        .json({ error: 'O campo "conteudo em português" é obrigatório!' });
    }
    if (!conteudo_en) {
      return res
        .status(400)
        .json({ error: 'O campo "conteudo em inglês" é obrigatório!' });
    }

    const dica = new DicaModel({ tipo_pt, tipo_en, conteudo_pt, conteudo_en });
    const data = await dica.criar();

    return res
      .status(201)
      .json({ message: "Registro criado com sucesso!", data });
  } catch (error) {
    console.error("Erro ao criar:", error);
    return res
      .status(500)
      .json({ error: "Erro interno ao salvar o registro." });
  }
};

export const buscarTodos = async (req, res) => {
  try {
    const registros = await DicaModel.buscarTodos(req.query);

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

    const dica = await DicaModel.buscarPorId(parseInt(id));

    if (!dica) {
      return res.status(404).json({ error: "Registro não encontrado." });
    }

    return res.status(200).json({ data: dica });
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

    const dica = await DicaModel.buscarPorId(parseInt(id));

    if (!dica) {
      return res
        .status(404)
        .json({ error: "Registro não encontrado para atualizar." });
    }

    if (req.body.tipo_pt !== undefined) {
      dica.tipo_pt = req.body.tipo_pt;
    }
    if (req.body.tipo_en !== undefined) {
      dica.tipo_en = req.body.tipo_en;
    }
    if (req.body.conteudo_pt !== undefined) {
      dica.conteudo_pt = req.body.conteudo_pt;
    }
    if (req.body.conteudo_en !== undefined) {
      dica.conteudo_en = req.body.conteudo_en;
    }

    const data = await dica.atualizar();

    return res
      .status(200)
      .json({
        message: `O registro "${data.tipo_pt}" foi atualizado com sucesso!`,
        data,
      });
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    return res.status(500).json({ error: "Erro ao atualizar registro." });
  }
};

export const deletar = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido." });
    }

    const dica = await DicaModel.buscarPorId(parseInt(id));

    if (!dica) {
      return res
        .status(404)
        .json({ error: "Registro não encontrado para deletar." });
    }

    await dica.deletar();

    return res
      .status(200)
      .json({
        message: `O registro "${dica.nome}" foi deletado com sucesso!`,
        deletado: dica,
      });
  } catch (error) {
    console.error("Erro ao deletar:", error);
    return res.status(500).json({ error: "Erro ao deletar registro." });
  }
};
