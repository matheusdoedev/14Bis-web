const bcrypt = require("bcryptjs");
// models
const Investidor = require("../models/Investidor");

class InvestidorController {
  static async postCreateInvestidor(req, res) {
    try {
      let {
        ID_INVESTIDOR,
        NOME_INVESTIDOR,
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
      } = req.body;

      const investidor = {
        ID_INVESTIDOR,
        NOME_INVESTIDOR,
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
      };

      // saving user data on Investidor migration
      const insertedInvestidor = await Investidor.create(investidor);

      // getting registered ID_INVESTIDOR
      const investidorId = insertedInvestidor.ID_INVESTIDOR;

      return res.json({
        ID_INVESTIDOR,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Erro ao criar Investidor" });
    }
  }

  static async getInvestidorData(req, res) {
    try {
      let { ID_INVESTIDOR, SN_ATIVO } = req.query;

      if (SN_ATIVO === "N") {
        return res.status(400).send({ error: "Investidor inativo." });
      }

      // searching in database if a Investidor with this ID_INVESTIDOR send on red.body exists
      const investidor = await Investidor.findAll({
        where: {
          ID_INVESTIDOR,
        },
      });

      // serialized Investidor
      const investidorSerialized = investidor.length > 0 ? investidor[0].dataValues : null;

      return res.json({ ...investidorSerialized });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Erro ao obter Investidor" });
    }
  }

  static async putInvestidorData(req, res) {
    try {
      let { ID_INVESTIDOR } = req.query;

      return res.json({ ID_INVESTIDOR });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Erro ao obter Investidor" });
    }
  }
}

module.exports = InvestidorController;
