import { FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const useAutenticacao = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const history = useHistory();

  const handleUserAuthentication = (event: FormEvent) => {
    event.preventDefault();

    console.log({
      email,

      senha,
    });

    history.push("/inicio");
  };

  return {
    email,
    setEmail,
    senha,
    setSenha,
    handleUserAuthentication,
  };
};
