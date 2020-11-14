import { FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const useCadastro = () => {
  const [name, setName] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const history = useHistory();

  const handleCreateUser = (event: FormEvent) => {
    event.preventDefault();

    console.log({
      name,
      email,
      telefone,
      senha,
    });

    history.push("/inicio");
  };

  return {
    name,
    setName,
    telefone,
    setTelefone,
    email,
    setEmail,
    senha,
    setSenha,
    handleCreateUser,
  };
};
