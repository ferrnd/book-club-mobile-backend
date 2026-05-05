import LivroModel from "../models/livroModel.js";

export const buscarTodos = async (req, res) => {
  try {
    const registros = await LivroModel.buscarTodos(req.query);

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

    const livro = await LivroModel.buscarPorId(parseInt(id));

    if (!livro) {
      return res.status(404).json({ error: "Registro não encontrado." });
    }

    return res.status(200).json({ data: livro });
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

    const livro = await LivroModel.buscarPorId(parseInt(id));

    if (!livro) {
      return res
        .status(404)
        .json({ error: "Registro não encontrado para atualizar." });
    }

    if (req.body.titulo !== undefined) {
      livro.titulo = req.body.titulo;
    }
    if (req.body.capa !== undefined) {
      livro.capa = req.body.capa;
    }
    if (req.body.autor !== undefined) {
      livro.autor = req.body.autor;
    }
    if (req.body.detalhesAutor !== undefined) {
      livro.detalhesAutor = req.body.detalhesAutor;
    }
    if (req.body.detalhesAutor_en !== undefined) {
      livro.detalhesAutor_en = req.body.detalhesAutor_en;
    }
    if (req.body.anoPublicacao !== undefined) {
      livro.anoPublicacao = parseInt(req.body.anoPublicacao);
    }
    if (req.body.genero !== undefined) {
      livro.genero = req.body.genero;
    }
    if (req.body.genero_en !== undefined) {
      livro.genero_en = req.body.genero_en;
    }
    if (req.body.resumo !== undefined) {
      livro.resumo = req.body.resumo;
    }
    if (req.body.resumo_en !== undefined) {
      livro.resumo_en = req.body.resumo_en;
    }
    if (req.body.contexto !== undefined) {
      livro.contexto = req.body.contexto;
    }
    if (req.body.contexto_en !== undefined) {
      livro.contexto_en = req.body.contexto_en;
    }
    if (req.body.estiloEscrita !== undefined) {
      livro.estiloEscrita = req.body.estiloEscrita;
    }
    if (req.body.estiloEscrita_en !== undefined) {
      livro.estiloEscrita_en = req.body.estiloEscrita_en;
    }
    if (req.body.enredo !== undefined) {
      livro.enredo = req.body.enredo;
    }
    if (req.body.enredo_en !== undefined) {
      livro.enredo_en = req.body.enredo_en;
    }
    if (req.body.verossimilhanca !== undefined) {
      livro.verossimilhanca = req.body.verossimilhanca;
    }
    if (req.body.verossimilhanca_en !== undefined) {
      livro.verossimilhanca_en = req.body.verossimilhanca_en;
    }
    if (req.body.personagens !== undefined) {
      livro.personagens = req.body.personagens;
    }
    if (req.body.caracteristicasLiterarias !== undefined) {
      livro.caracteristicasLiterarias = req.body.caracteristicasLiterarias;
    }
    if (req.body.caracteristicasLiterarias_en !== undefined) {
      livro.caracteristicasLiterarias_en =
        req.body.caracteristicasLiterarias_en;
    }
    if (req.body.conclusao !== undefined) {
      livro.conclusao = req.body.conclusao;
    }
    if (req.body.conclusao_en !== undefined) {
      livro.conclusao_en = req.body.conclusao_en;
    }

    const data = await livro.atualizar();

    return res
      .status(200)
      .json({
        message: `O registro "${data.titulo}" foi atualizado com sucesso!`,
        data,
      });
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    return res.status(500).json({ error: "Erro ao atualizar registro." });
  }
};
