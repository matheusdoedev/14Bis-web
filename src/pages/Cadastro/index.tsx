import React from "react";
// hooks
import { useCadastro } from "../../hooks/create-user";
// styles
import { CadastroContainer, CadastroForm } from "./styles";
// components
import { Container } from "../../styles/objects/container";
import Input from "../../components/Input";
import { Button } from "../../styles/objects/button";
import Brand from "../../components/Brand";

const Cadastro = () => {
  const {
    email,
    handleCreateUser,
    name,
    telefone,
    setTelefone,
    setName,
    setEmail,
    setSenha,
    senha,
  } = useCadastro();

  return (
    <CadastroContainer>
      <Container>
        <Brand />

        <CadastroForm onSubmit={handleCreateUser}>
          <h1>Cadastre-se</h1>

          <Input
            name="nome"
            label="Nome"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            name="telefone"
            label="Telefone"
            placeholder="Digite seu telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />

          <Input
            type="email"
            name="email"
            label="E-mail"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            type="password"
            name="senha"
            label="Senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <Button to="/triagem">Salvar</Button>
        </CadastroForm>
      </Container>
    </CadastroContainer>
  );
};

export default Cadastro;
