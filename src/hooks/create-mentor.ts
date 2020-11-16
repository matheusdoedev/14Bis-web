import { useState, FormEvent } from "react";
// services
import api from "../services/14bis-api";

export const useCreateMentor = () => {
  // nome da startup
  const [CPF, setCPF] = useState("");
  const [ESCOLARIDADE, setESCOLARIDADE] = useState<number>();
  const [ID_AREA_ATUACAO, setAREADEATUACAO] = useState<number>();
  const [DT_NASCIMENTO, setDATADENASCIMENTO] = useState("");
  const [SEXO, setSEXO] = useState<number>();
  const [CURRICULO_RESUMIDO, setCURRICULORESUMIDO] = useState("");
  const [FONE_FIXO, setFONEFIXO] = useState("");
  const [FONE_CELULAR, setFONECELULAR] = useState("");
  const [LINKEDIN, setLINKEDIN] = useState("");
  const [CEP, setCEP] = useState("");
  const [ENDERECO, setENDERECO] = useState("");
  const [CIDADE, setCIDADE] = useState("");
  const [UF, setUF] = useState("");

  const handleCreateMentor = async (e: FormEvent, callback: () => void) => {
    e?.preventDefault();

    await api
      .post("mentor", {
        ID_MENTOR: localStorage.getItem("ID"),
        CPF,
        ESCOLARIDADE,
        ID_AREA_ATUACAO,
        DT_NASCIMENTO,
        SEXO,
        CURRICULO_RESUMIDO,
        CEP,
        ENDERECO,
        CIDADE,
        UF,
        FONE_FIXO,
        FONE_CELULAR,
        LINKEDIN,
        SN_RECEBER_NOVIDADES: "N",
        SN_RECEBER_NOTIF_SISTEMA: "S",
        SN_ATIVO: "S",
      })
      .then(() => {
        callback();
      });
  };

  return {
    CPF,
    ESCOLARIDADE,
    ID_AREA_ATUACAO,
    DT_NASCIMENTO,
    SEXO,
    CURRICULO_RESUMIDO,
    CEP,
    ENDERECO,
    CIDADE,
    UF,
    FONE_FIXO,
    FONE_CELULAR,
    LINKEDIN,
    setFONEFIXO,
    setFONECELULAR,
    setLINKEDIN,
    setCEP,
    setENDERECO,
    setCIDADE,
    setUF,
    setCPF,
    setESCOLARIDADE,
    setAREADEATUACAO,
    setDATADENASCIMENTO,
    setSEXO,
    setCURRICULORESUMIDO,
    handleCreateMentor,
  };
};
