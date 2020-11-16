import { useState, FormEvent, useContext } from "react";
// services
import api from "../services/14bis-api";
// hooks
import { UsersContext } from "../hooks/create-user";

export const useCreateStartup = () => {
  // nome da startup
  const [NOME_FANTASIA, setNOMEFANTASIA] = useState("");
  const [RAZAO_SOCIAL, setRAZAOSOCIAL] = useState("");
  const [CNPJ, setCNPJ] = useState("");
  const [CAMINHO_FOTO, setCAMINHOFOTO] = useState("");
  const [WEBSITE, setWEBSITE] = useState("");
  const [LINKEDIN, setLINKEDIN] = useState("");
  const [FACEBOOK, setFACEBOOK] = useState("");
  const [ENDERECO, setENDERECO] = useState("");
  const [CEP, setCEP] = useState("");
  const [CIDADE, setCIDADE] = useState("");
  const [UF, setUF] = useState("");
  const [DT_FUNDACAO, setFUNDACAO] = useState("");
  const [ID_SEGUIMENTO_PRINC, setSEGUIMENTOPRINCIPAL] = useState<number>();
  const [ID_MODELO_NEGOCIO, setMODELONEGOCIO] = useState<number>();
  const [ID_MOMENTO, setMOMENTO] = useState<number>();
  const [ID_TAMANHO_TIME, setTAMANHOTIME] = useState<number>();
  const [ID_FATURAMENTO_ANUAL, setFATURAMENTOANUAL] = useState<number>();
  const [ID_SEGUIMENTO_SECUN, setSEGUIMENTOSECUN] = useState<number>();
  const [ID_PUBLICO_ALVO, setPUBLICOALVO] = useState<number>();

  const createUsers = useContext(UsersContext);

  const handleCreateStartup = async (e: FormEvent, callback: () => void) => {
    e?.preventDefault();

    await api
      .post("startup", {
        ID_STARTUP: createUsers?.USER_ID,
        NOME_FANTASIA,
        RAZAO_SOCIAL,
        DT_FUNDACAO,
        ID_SEGUIMENTO_PRINC,
        ID_MODELO_NEGOCIO,
        ID_MOMENTO,
        ID_TAMANHO_TIME,
        ID_FATURAMENTO_ANUAL,
        ID_SEGUIMENTO_SECUN,
        ID_PUBLICO_ALVO,
        CNPJ,
        WEBSITE,
        LINKEDIN,
        FACEBOOK,
        CAMINHO_FOTO,
        CEP,
        ENDERECO,
        CIDADE,
        UF,
      })
      .then(() => {
        callback();
      });
  };

  return {
    NOME_FANTASIA,
    RAZAO_SOCIAL,
    DT_FUNDACAO,
    ID_SEGUIMENTO_PRINC,
    ID_MODELO_NEGOCIO,
    ID_MOMENTO,
    ID_TAMANHO_TIME,
    ID_FATURAMENTO_ANUAL,
    ID_SEGUIMENTO_SECUN,
    ID_PUBLICO_ALVO,
    CNPJ,
    WEBSITE,
    LINKEDIN,
    FACEBOOK,
    CAMINHO_FOTO,
    CEP,
    ENDERECO,
    CIDADE,
    UF,
    setENDERECO,
    setCNPJ,
    setWEBSITE,
    setFACEBOOK,
    setLINKEDIN,
    setCAMINHOFOTO,
    setCEP,
    setCIDADE,
    setUF,
    setPUBLICOALVO,
    setNOMEFANTASIA,
    setRAZAOSOCIAL,
    setFUNDACAO,
    setSEGUIMENTOPRINCIPAL,
    setMODELONEGOCIO,
    setMOMENTO,
    setTAMANHOTIME,
    setFATURAMENTOANUAL,
    setSEGUIMENTOSECUN,
    handleCreateStartup,
  };
};
