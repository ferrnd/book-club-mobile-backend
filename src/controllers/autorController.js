import AutorModel from "../models/autorModel.js";

export const buscarTodos = async (req, res) => {
  try {
    const registros = await AutorModel.buscarTodos(req.query);

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

    const autor = await AutorModel.buscarPorId(parseInt(id));

    if (!autor) {
      return res.status(404).json({ error: "Registro não encontrado." });
    }

    return res.status(200).json({ data: autor });
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

    const autor = await AutorModel.buscarPorId(parseInt(id));

    if (!autor) {
      return res
        .status(404)
        .json({ error: "Registro não encontrado para atualizar." });
    }

    if (req.body.nome !== undefined) {
      autor.nome = req.body.nome;
    }
    if (req.body.fotoUrl !== undefined) {
      autor.fotoUrl = req.body.fotoUrl;
    }
    if (req.body.nascimento !== undefined) {
      autor.nascimento = req.body.nascimento;
    }
    if (req.body.nacionalidade_pt !== undefined) {
      autor.nacionalidade_pt = req.body.nacionalidade_pt;
    }
    if (req.body.nacionalidade_en !== undefined) {
      autor.nacionalidade_en = req.body.nacionalidade_en;
    }
    if (req.body.biografia_pt !== undefined) {
      autor.biografia_pt = req.body.biografia_pt;
    }
    if (req.body.biografia_en !== undefined) {
      autor.biografia_en = req.body.biografia_en;
    }
    if (req.body.estilo_escrita_pt !== undefined) {
      autor.estilo_escrita_pt = req.body.estilo_escrita_pt;
    }
    if (req.body.estilo_escrita_en !== undefined) {
      autor.estilo_escrita_en = req.body.estilo_escrita_en;
    }

    const data = await autor.atualizar();

    return res.status(200).json({
      message: `O registro "${data.nome}" foi atualizado com sucesso!`,
      data,
    });
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    return res.status(500).json({ error: "Erro ao atualizar registro." });
  }
};
