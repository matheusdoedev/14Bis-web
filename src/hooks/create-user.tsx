import React, { Dispatch } from "react";
// hooks
import { FormEvent, useState, createContext } from "react";
// services
import api from "../services/14bis-api";

// modal context interface
export interface UsersContextInterface {
  NAME: string;
  TELEFONE: string;
  EMAIL: string;
  SENHA: string;
  PERFIL: string;
  USER_ID: number | undefined;
  SN_ATIVO: string;
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
  const [PERFIL, setPERFIL] = useState("");

  const [USER_ID, setUSERID] = useState<number>();
  const [SN_ATIVO, setSNATIVO] = useState("");

  const handleCreateUser = async (
    event: FormEvent,
    callback: (perfil: string) => void
  ) => {
    event.preventDefault();

    await api
      .post("/users", {
        NOME_COMPLETO: NAME,
        SENHA,
        EMAIL_LOGIN: EMAIL,
        FONE_LOGIN: TELEFONE,
        ID_PERFIL: PERFIL,
        SN_ATIVO: "S",
      })
      .then((r) => r.data)
      .then(({ ID_PERFIL, SN_ATIVO, token, user_id }) => {
        setUSERID(user_id);
        setSNATIVO(SN_ATIVO);
        localStorage.setItem("PERFIL", ID_PERFIL);
        localStorage.setItem("TOKEN", token);

        callback(ID_PERFIL);
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
        USER_ID,
        SN_ATIVO,
        handleCreateUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
