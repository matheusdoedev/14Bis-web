const bcrypt = require("bcryptjs");
// models
const User = require("../models/User");
// utils
const generateToken = require("../../utils/generateToken");
const Empreendedor = require("../models/Empreendedor");

class UsersController {
  static async postCreateUser(req, res) {
    try {
      let { NOME_COMPLETO, EMAIL_LOGIN, FONE_LOGIN, SENHA, ID_PERFIL, SN_ATIVO } = req.body;

      // password must be more than or equal 6 characters
      if (SENHA.length < 6) {
        return res.status(400).send({
          error: "A senha deve ter pelo menos 6 caracteres",
        });
      }

      // user
      const user = {
        NOME_COMPLETO,
        EMAIL_LOGIN,
        // encrypting user password before save in database with bcryptjs
        SENHA,
        FONE_LOGIN,
        ID_PERFIL,
        SN_ATIVO,
      };

      // saving user data on users migration
      const insertedUser = await User.create(user);

      // getting registered user ID_USUARIO
      const userId = insertedUser.ID_USUARIO;

      // token
      const token = generateToken({ ID_USUARIO: userId });

      // reseting req.body password
      SENHA = undefined;

      return res.json({ user_id: userId, token, ID_PERFIL, SN_ATIVO });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Erro ao criar usuário" });
    }
  }

  static async postUserAuthentication(req, res) {
    try {
      let { EMAIL_LOGIN, SENHA } = req.body;

      // searching in database if a user with this email send on red.body exists
      const user = await User.findAll({
        where: {
          EMAIL_LOGIN,
        },
      });

      // serialized user
      const userSerialized = user.length > 0 ? user[0].dataValues : null;

      // checks if had founded a valid email
      if (!userSerialized) {
        return res.status(400).send({ error: "Usuário não encontrado/e-mail inválido" });
      }

      if (userSerialized.SENHA !== SENHA) {
         return res.status(400).send({ error: "Senha incorreta." }); 
      }

      // token
      const token = generateToken({ id: userSerialized.ID_USUARIO });

      // reseting req.body password
      SENHA = undefined;

      return res.json({
        user_id: userSerialized.ID_USUARIO,
        perfil: userSerialized.ID_PERFIL,
        sn_ativo: userSerialized.SN_ATIVO,
        token,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Erro de autenticação de usuário" });
    }
  }

  static async getUserData(req, res) {
    try {
      let { ID_USUARIO, ID_PERFIL } = req.query;

      // searching in database if a user with this email send on red.body exists
      const user = await User.findAll({
        where: {
          ID_USUARIO,
        },
      });

      // serialized user
      const userSerialized = user.length > 0 ? user[0].dataValues : null;

      return res.json({ ...userSerialized });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Erro ao obter usuário" });
    }
  }

  static async putUserData(req, res) {
    try {
      let { ID_USUARIO, ID_PERFIL } = req.query;

      if (perfil === "MENT") {
        Empreendedor.create({ ID_USUARIO });
      }

      return res.json({ ID_USUARIO, ID_PERFIL });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Erro ao obter usuário" });
    }
  }
}

module.exports = UsersController;
