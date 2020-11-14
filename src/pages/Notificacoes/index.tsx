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
import HeaderDesktop from "../../components/Header-desktop";
import { Row, Col } from "react-bootstrap";

const Notificacoes = () => {
  return (
    <NotificacoesContainer>
      <HeaderDesktop />
      <Header>
        <ReturnButton to="/startups/0/perfil" />
      </Header>
      <Container>
        <Row>
          <Col xs="12">
            <Title title="Notificações" />
          </Col>
        </Row>

        <Row>
          <Col xs="12">
            <Menu
              options={[
                {
                  path: "/startups/notificacoes/0",
                  label: "Aguardando confirmação de agendamento",
                },
                {
                  path: "/startups/0/notificacoes/0",
                  label: "Confirmado o agendamento para 18h",
                },
              ]}
            />
          </Col>
        </Row>

        <BottomMenu />
      </Container>
    </NotificacoesContainer>
  );
};

export default Notificacoes;
