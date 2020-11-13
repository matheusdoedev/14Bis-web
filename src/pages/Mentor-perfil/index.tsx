import React from "react";
// imgs
import arrowLeft from "../../assets/arrow-left.svg";
// styles
import { MentorContainer, ReturnButton, MentorAvatar } from "./styles";
// components
import Header from "../../components/Header";
import { Container } from "../../styles/objects/container";
import Menu from "../../components/Menu";
import { Button } from "../../styles/objects/button";

const MentorPerfil = () => {
  return (
    <MentorContainer>
      <Container>
        <Header>
          <ReturnButton to="/inicio">
            <img src={arrowLeft} alt="Voltar" />
          </ReturnButton>
        </Header>

        <MentorAvatar />

        <Menu
          options={[
            { path: "/mentores/editar-dados/0", label: "Dados Pessoais" },
            { path: "/mentores/editar-dados/0", label: "Endereço" },
            { path: "/mentores/editar-dados/0", label: "Biografia" },
            { path: "/mentores/editar-dados/0", label: "Notificações" },
            { path: "/mentores/editar-dados/0", label: "Termos de uso" },
          ]}
        />

        <Button to="/" style={{ marginTop: "var(--gap-lg)" }}>
          Sair da conta
        </Button>
      </Container>
    </MentorContainer>
  );
};

export default MentorPerfil;
