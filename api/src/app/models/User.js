const Sequelize = require("sequelize");

const sequelize = require("../../config/database");

const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  telefone: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    // unique: true,
  },

  perfil: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
