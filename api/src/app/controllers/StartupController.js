const bcrypt = require("bcryptjs");
// models
const Startup = require("../models/Startup");

class StartupController {
  static async postCreateStartup(req, res) {
    try {
      let {
        ID_STARTUP,
        NOME_STARTUP,
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

      const startup = {
        ID_STARTUP,
        NOME_STARTUP,
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

      // saving user data on Startup migration
      const insertedStartup = await Startup.create(startup);

      // getting registered ID_STARTUP
      const startupId = insertedStartup.ID_STARTUP;

      return res.json({
        ID_STARTUP,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Erro ao criar Startup" });
    }
  }

  static async getStartupData(req, res) {
    try {
      let { ID_STARTUP, SN_ATIVO } = req.query;

      if (SN_ATIVO === "N") {
        return res.status(400).send({ error: "Startup inativo." });
      }

      // searching in database if a Startup with this ID_STARTUP send on red.body exists
      const startup = await Startup.findAll({
        where: {
          ID_STARTUP,
        },
      });

      // serialized Startup
      const startupSerialized = startup.length > 0 ? startup[0].dataValues : null;

      return res.json({ ...startupSerialized });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Erro ao obter Startup" });
    }
  }

  static async putStartupData(req, res) {
    try {
      let { ID_STARTUP } = req.query;

      return res.json({ ID_STARTUP });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Erro ao obter Startup" });
    }
  }
}

module.exports = StartupController;
