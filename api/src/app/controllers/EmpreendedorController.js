const bcrypt = require("bcryptjs");
// models
const Empreendedor = require("../models/Empreendedor");

class EmpreendedorController {
  static async postCreateEmpreendedor(req, res) {
    try {
      let {
        ID_EMPREENDEDOR,
        NOME_EMPREENDEDOR,
        CPF,
        DT_NASCIMENTO,
        SEXO,
        CEP,
        ENDERECO,
        UF,
        CIDADE,
        FONE_FIXO,
        FONE_CELULAR,
        LINKEDIN,
        SKYPE,
        GOOGLE_PLUS,
        FACEBOOK,
        ESCOLARIDADE,
        ID_AREA_ATUACAO,
        CURRICULO_RESUMIDO,
        SN_RECEBER_NOVIDADES,
        SN_RECEBER_NOTIF_SISTEMA,
        SN_ATIVO,
        CAMINHO_FOTO,
        INSTAGRAM,
        MEDIUM,
        TWITTER,
        CARGO_FUNCAO,
        ID_POSICAO,
      } = req.body;

      const empreendedor = {
        ID_EMPREENDEDOR,
        NOME_EMPREENDEDOR,
        CPF,
        DT_NASCIMENTO,
        SEXO,
        CEP,
        ENDERECO,
        UF,
        CIDADE,
        FONE_FIXO,
        FONE_CELULAR,
        LINKEDIN,
        SKYPE,
        GOOGLE_PLUS,
        FACEBOOK,
        ESCOLARIDADE,
        ID_AREA_ATUACAO,
        CURRICULO_RESUMIDO,
        SN_RECEBER_NOVIDADES,
        SN_RECEBER_NOTIF_SISTEMA,
        SN_ATIVO,
        CAMINHO_FOTO,
        INSTAGRAM,
        MEDIUM,
        TWITTER,
        CARGO_FUNCAO,
        ID_POSICAO,
      };

      // saving user data on Empreendedor migration
      const insertedEmpreendedor = await Empreendedor.create(empreendedor);

      // getting registered ID_EMPREENDEDOR
      const empreendedorId = insertedEmpreendedor.ID_EMPREENDEDOR;

      return res.json({
        ID_EMPREENDEDOR,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Erro ao criar Empreendedor" });
    }
  }

  static async getEmpreendedorData(req, res) {
    try {
      let { ID_EMPREENDEDOR, SN_ATIVO } = req.query;

      if (SN_ATIVO === "N") {
        return res.status(400).send({ error: "Empreendedor inativo." });
      }

      // searching in database if a Empreendedor with this ID_EMPREENDEDOR send on red.body exists
      const empreendedor = await Empreendedor.findAll({
        where: {
          ID_EMPREENDEDOR,
        },
      });

      // serialized Empreendedor
      const empreendedorSerialized = empreendedor.length > 0 ? empreendedor[0].dataValues : null;

      return res.json({ ...empreendedorSerialized });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Erro ao obter Empreendedor" });
    }
  }

  static async putEmpreendedorData(req, res) {
    try {
      let { ID_EMPREENDEDOR } = req.query;

      return res.json({ ID_EMPREENDEDOR });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Erro ao obter Empreendedor" });
    }
  }
}

module.exports = EmpreendedorController;
