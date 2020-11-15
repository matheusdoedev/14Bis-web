const Sequelize = require("sequelize");

const sequelize = require("../../config/database");

const Empreendedor = sequelize.define("EMPREENDEDOR", {
  ID_EMPREENDEDOR: {
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

  NOME_EMPREENDEDOR: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  PROGRAMA: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  CPF: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },

  DT_NASCIMENTO: {
    type: Sequelize.DATE,
    allowNull: false,
  },

  SEXO: {
    type: Sequelize.STRING,
    allowNull: false,
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

  FONE_FIXO: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  FONE_CELULAR: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  LINKEDIN: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  SKYPE: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  GOOGLE_PLUS: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  FACEBOOK: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  ESCOLARIDADE: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  ID_AREA_ATUACAO: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  CURRICULO_RESUMIDO: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  SN_RECEBER_NOVIDADES: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  SN_RECEBER_NOTIF_SISTEMA: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  SN_ATIVO: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  CAMINHO_FOTO: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  INSTAGRAM: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  MEDIUM: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  TWITTER: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  CARGO_FUNCAO: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  ID_POSICAO: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

});

module.exports = Empreendedor;
