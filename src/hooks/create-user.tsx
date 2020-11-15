import React, { Dispatch, useEffect } from "react";
// hooks
import { FormEvent, useState, createContext } from "react";
import { useHistory } from "react-router-dom";
// services
import api from "../services/14bis-api";

// modal context interface
export interface UsersContextInterface {
  NAME: string;
  TELEFONE: string;
  EMAIL: string;
  SENHA: string;
  PERFIL: string;
  setNAME: Dispatch<React.SetStateAction<string>>;
  setTELEFONE: Dispatch<React.SetStateAction<string>>;
  setEMAIL: Dispatch<React.SetStateAction<string>>;
  setSENHA: Dispatch<React.SetStateAction<string>>;
  setPERFIL: Dispatch<React.SetStateAction<string>>;
  handleCreateUser: any;
}

// creating modal context
export const UsersContext = createContext<UsersContextInterface | null>(null);

export const CreateUsers: React.FC = ({ children }) => {
  const [NAME, setNAME] = useState("");
  const [TELEFONE, setTELEFONE] = useState("");
  const [EMAIL, setEMAIL] = useState("");
  const [SENHA, setSENHA] = useState("");
  const [PERFIL, setPERFIL] = useState("EMPREENDEDOR");

  useEffect(() => {
    console.log(PERFIL);
  }, [PERFIL]);

  const history = useHistory();

  const handleCreateUser = async (event: FormEvent, callback: (perfil: string) => void) => {
    event.preventDefault();

    await api
      .post("/users", {
        NOME_COMPLETO: NAME,
        SENHA,
        EMAIL_LOGIN: EMAIL,
        FONE_LOGIN: TELEFONE,
        ID_PERFIL: "EMPRE",
        SN_ATIVO: "S",
      })
      .then((r) => r.data)
      .then(({ perfil }) => {
        callback(perfil);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <UsersContext.Provider
      value={{
        NAME,
        EMAIL,
        TELEFONE,
        PERFIL,
        SENHA,
        setNAME,
        setEMAIL,
        setTELEFONE,
        setPERFIL,
        setSENHA,
        handleCreateUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
