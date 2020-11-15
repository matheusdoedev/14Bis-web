const bcrypt = require("bcryptjs");
// models
const Mentor = require("../models/Mentor");

class MentorController {
  static async postCreateMentor(req, res) {
    try {
      let {
        ID_MENTOR,
        NOME_MENTOR,
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

      const mentor = {
        ID_MENTOR,
        NOME_MENTOR,
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

      // saving user data on Mentor migration
      const insertedMentor = await Mentor.create(mentor);

      // getting registered ID_MENTOR
      const mentorId = insertedMentor.ID_MENTOR;

      return res.json({
        ID_MENTOR,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Erro ao criar Mentor" });
    }
  }

  static async getMentorData(req, res) {
    try {
      let { ID_MENTOR, SN_ATIVO } = req.query;

      if (SN_ATIVO === "N") {
        return res.status(400).send({ error: "Mentor inativo." });
      }

      // searching in database if a Mentor with this ID_MENTOR send on red.body exists
      const mentor = await Mentor.findAll({
        where: {
          ID_MENTOR,
        },
      });

      // serialized Mentor
      const mentorSerialized = mentor.length > 0 ? mentor[0].dataValues : null;

      return res.json({ ...mentorSerialized });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Erro ao obter Mentor" });
    }
  }

  static async putMentorData(req, res) {
    try {
      let { ID_MENTOR } = req.query;

      return res.json({ ID_MENTOR });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Erro ao obter Mentor" });
    }
  }
}

module.exports = MentorController;
