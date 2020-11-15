const Sequelize = require("sequelize");

const sequelize = require("../../config/database");

const Startup = sequelize.define("STARTUP", {
  ID_STARTUP: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    allowNull: false,
    references: {
      model: User,
      key: "ID_USER",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },

  NOME_FANTASIA: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  RAZAO_SOCIAL: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  DT_FUNDACAO: {
    type: Sequelize.DATE,
    allowNull: false,
  },

  CNPJ: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  DESCR_CURTA: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  DESCR_LONGA: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  CAMINHO_FOTO: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  TAGS: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  ID_MODELO_NEGOCIO: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

  ID_PUBLICO_ALVO: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

  ID_MOMENTO: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

  ID_SEGUIMENTO_PRINC: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

  ID_SEGUIMENTO_SECUN: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

  ID_TAMANHO_TIME: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

  ID_FATURAMENTO_ANUAL: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

  WEBSITE: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  LINKEDIN: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  FACEBOOK: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  APPSTORE: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  GOOGLEPLAY: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  YOUTUBE: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  INSTAGRAM: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  CEP: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  ENDERECO: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  UF: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  CIDADE: {
    type: Sequelize.STRING,
    allowNull: false,
  },

});

module.exports = Startup;
