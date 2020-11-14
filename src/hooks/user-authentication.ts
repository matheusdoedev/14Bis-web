import { FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// utils
import users from "../utils/users";

export const useAutenticacao = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const history = useHistory();

  const handleUserAuthentication = (event: FormEvent) => {
    event.preventDefault();

    const userLogging = users.find(
      (user) => user.email === email && user.senha === senha
    );

    if (userLogging) {
      localStorage.setItem("Perfil", userLogging.perfil);
      history.push("/inicio");
    }
  };

  return {
    email,
    setEmail,
    senha,
    setSenha,
    handleUserAuthentication,
  };
};
