import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
// utils
import users from "../utils/users";
// services
import api from "../services/14bis-api";

export const useAutenticacao = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const history = useHistory();

  const handleUserAuthentication = async (
    event: FormEvent,
    callback: () => void
  ) => {
    event.preventDefault();

    await api
      .post("users/user-authentication", {
        EMAIL_LOGIN: email,
        SENHA: senha,
      })
      .then((r) => r.data)
      .then(({ perfil, user_id, sn_ativo, token }) => {
        localStorage.setItem("PERFIL", perfil);
        localStorage.setItem("ID", user_id);
        localStorage.setItem("SN_ATIVO", sn_ativo);
        localStorage.setItem("TOKEN", token);

        callback();
      });
  };

  return {
    email,
    setEmail,
    senha,
    setSenha,
    handleUserAuthentication,
  };
};
