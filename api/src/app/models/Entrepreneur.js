const Sequelize = require("sequelize");

const sequelize = require("../../config/database");

const User = require("./User");

const Entrepreneur = sequelize.define("Entrepreneur", {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: User,
      key: "id",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },

  faturamento: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  modelo: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  funcionarios: {
    type: Sequelize.INTEGER,
    allowNull: false,
    // unique: true,
  },

  perfil: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Entrepreneur;
