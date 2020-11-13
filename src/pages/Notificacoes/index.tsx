import React from "react";
// styles
import { NotificacoesContainer } from "./styles";
// components
import { Container } from "../../styles/objects/container";
import Header from "../../components/Header";
import ReturnButton from "../../components/ReturnButton";
import Title from "../../components/Title";
import Menu from "../../components/Menu";
import BottomMenu from "../../components/BottomMenu";

const Notificacoes = () => {
  return (
    <NotificacoesContainer>
      <Container>
        <Header>
          <ReturnButton to="/startups/0/perfil" />
        </Header>

        <Title title="Notificações" />

        <Menu
          options={[
            {
              path: "/startups/0/notificacoes/0",
              label: "Aguardando confirmação de agendamento",
            },
            {
              path: "/startups/0/notificacoes/0",
              label: "Confirmado o agendamento para 18h",
            },
          ]}
        />

        <BottomMenu />
      </Container>
    </NotificacoesContainer>
  );
};

export default Notificacoes;
