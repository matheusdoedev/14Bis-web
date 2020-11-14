const bcrypt = require("bcryptjs");
// models
const User = require("../models/User");
// utils
const generateToken = require("../../utils/generateToken");

class UsersController {
  static async postCreateUser(req, res) {
    try {
      let { nome, email, telefone, senha, perfil } = req.body;

      // password must be more than or equal 6 characters
      if (senha.length < 6) {
        return res.status(400).send({
          error: "The password must to have more than or equal 6 characters",
        });
      }

      // user
      const user = {
        nome,
        email,
        // encrypting user password before save in database with bcryptjs
        senha: await bcrypt.hash(senha, 10),
        telefone,
        perfil,
      };

      // saving user data on users migration
      const insertedUser = await User.create(user);

      // getting registered user id
      const userId = insertedUser.id;

      // token
      const token = generateToken({ id: userId });

      // reseting req.body password
      senha = undefined;

      return res.json({ user_id: userId, token, perfil });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "User create error" });
    }
  }

  static async postUserAuthentication(req, res) {
    try {
      let { email, senha } = req.body;

      // searching in database if a user with this email send on red.body exists
      const user = await User.findAll({
        where: {
          email,
        },
      });

      // serialized user
      const userSerialized = user.length > 0 ? user[0].dataValues : null;

      // checks if had founded a valid email
      if (!userSerialized) {
        return res.status(400).send({ error: "User not found, invalid email" });
      }

      // checks if the user passwords is correct
      if (!(await bcrypt.compare(senha, userSerialized.senha))) {
        return res.status(400).send({ error: "Invalid password" });
      }

      // token
      const token = generateToken({ id: userSerialized.id });

      // reseting req.body password
      senha = undefined;

      return res.json({
        user_id: userSerialized.id,
        perfil: userSerialized.perfil,
        token,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "User authentication error" });
    }
  }

  static async getUserData(req, res) {
    try {
      let { id, perfil } = req.query;

      // searching in database if a user with this email send on red.body exists
      const user = await User.findAll({
        where: {
          id,
        },
      });

      // serialized user
      const userSerialized = user.length > 0 ? user[0].dataValues : null;

      return res.json({ ...userSerialized });
    } catch (err) {
      console.log(error);
      return res.status(400).send({ error: "Get user error" });
    }
  }

  static async putUserData(req, res) {
    try {
      let { id, perfil } = req.query;

      return res.json({ id, perfil });
    } catch (err) {
      console.log(error);
      return res.status(400).send({ error: "Get user error" });
    }
  }
}

module.exports = UsersController;
