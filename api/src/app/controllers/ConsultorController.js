const bcrypt = require("bcryptjs");
// models
const Consultor = require("../models/Consultor");

class ConsultorController {
  static async postCreateConsultor(req, res) {
    try {
      let {
        ID_CONSULTOR,
        NOME_CONSULTOR,
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
        HABILIDADES,
      } = req.body;

      const consultor = {
        ID_CONSULTOR,
        NOME_CONSULTOR,
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
        HABILIDADES,
      };

      // saving user data on Consultor migration
      const insertedConsultor = await Consultor.create(consultor);

      // getting registered ID_CONSULTOR
      const consultorId = insertedConsultor.ID_CONSULTOR;

      return res.json({
        ID_CONSULTOR,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Erro ao criar Consultor" });
    }
  }

  static async getConsultorData(req, res) {
    try {
      let { ID_CONSULTOR, SN_ATIVO } = req.query;

      if (SN_ATIVO === "N") {
        return res.status(400).send({ error: "Consultor inativo." });
      }

      // searching in database if a Consultor with this ID_CONSULTOR send on red.body exists
      const consultor = await Consultor.findAll({
        where: {
          ID_CONSULTOR,
        },
      });

      // serialized Consultor
      const consultorSerialized = consultor.length > 0 ? consultor[0].dataValues : null;

      return res.json({ ...consultorSerialized });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Erro ao obter Consultor" });
    }
  }

  static async putConsultorData(req, res) {
    try {
      let { ID_CONSULTOR } = req.query;

      return res.json({ ID_CONSULTOR });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Erro ao obter Consultor" });
    }
  }
}

module.exports = ConsultorController;
