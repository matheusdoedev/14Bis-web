import React from "react";
// styles
import { CadastroContainer, CadastroForm } from "./styles";
// components
import { Container } from "../../styles/objects/container";
import Input from "../../components/Input";
import { Button } from "../../styles/objects/button";
import Brand from "../../components/Brand";

const Cadastro = () => {
  return (
    <CadastroContainer>
      <Container>
        <Brand />

        <CadastroForm>
          <h1>Cadastre-se</h1>

          <Input name="nome" label="Nome" placeholder="Digite seu nome" />
          <Input
            name="telefone"
            label="Telefone"
            placeholder="Digite seu telefone"
          />
          <Input
            type="email"
            name="email"
            label="E-mail"
            placeholder="Digite seu email"
          />
          <Input
            type="password"
            name="senha"
            label="Senha"
            placeholder="Digite sua senha"
          />

          <Button to="/triagem">Salvar</Button>
        </CadastroForm>
      </Container>
    </CadastroContainer>
  );
};

export default Cadastro;
