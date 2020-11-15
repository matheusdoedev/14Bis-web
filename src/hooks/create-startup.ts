import { useState, FormEvent } from "react";

export const useCreateStartup = () => {
  // nome da startup
  const [NOME_FANTASIA, setNOMEFANTASIA] = useState("");
  const [RAZAO_SOCIAL, setRAZAOSOCIAL] = useState("");
  const [DT_FUNDACAO, setFUNDACAO] = useState("");
  const [ID_SEGUIMENTO_PRINC, setSEGUIMENTOPRINCIPAL] = useState<number>();
  const [ID_MODELO_NEGOCIO, setMODELONEGOCIO] = useState<number>();
  const [ID_MOMENTO, setMOMENTO] = useState<number>();
  const [ID_TAMANHO_TIME, setTAMANHOTIME] = useState<number>();
  const [ID_FATURAMENTO_ANUAL, setFATURAMENTOANUAL] = useState<number>();
  const [ID_SEGUIMENTO_SECUN, setSEGUIMENTOSECUN] = useState<number>();
  const [ID_PUBLICO_ALVO, setPUBLICOALVO] = useState<number>();

  const handleCreateStartup = (e: FormEvent) => {
    console.log({
      NOME_FANTASIA,
      RAZAO_SOCIAL,
      DT_FUNDACAO,
      ID_SEGUIMENTO_PRINC,
      ID_MODELO_NEGOCIO,
      ID_MOMENTO,
      ID_TAMANHO_TIME,
      ID_FATURAMENTO_ANUAL,
      ID_SEGUIMENTO_SECUN,
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
