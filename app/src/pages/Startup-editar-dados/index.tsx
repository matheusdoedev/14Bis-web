import React from "react";
// styles
import {
  StartupEditarDadosContainer,
  StartupLogo,
  EditarDadosForm,
} from "./styles";
// components
import Header from "../../components/Header";
import { Container } from "../../styles/objects/container";
import Input from "../../components/Input";
import { Button } from "../../styles/objects/button";
import BottomMenu from "../../components/BottomMenu";
import ReturnButton from "../../components/ReturnButton";

const StartupEditarDados = () => {
  return (
    <StartupEditarDadosContainer>
      <Container>
        <Header>
          <ReturnButton to="/startups/0/perfil" />
        </Header>

        <StartupLogo />

        <EditarDadosForm>
          <Input name="nome" label="Nome" />
          <Input name="telefone" label="Telefone" />
          <Input name="email" label="E-mail" />
          <Input name="senha" label="Senha" />

          <Button as="button" type="submit">
            Salvar
          </Button>
        </EditarDadosForm>
        <BottomMenu />
      </Container>
    </StartupEditarDadosContainer>
  );
};

export default StartupEditarDados;
