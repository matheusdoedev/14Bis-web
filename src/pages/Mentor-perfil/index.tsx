import React from "react";
import { useHistory } from "react-router-dom";
// imgs
import arrowLeft from "../../assets/arrow-left.svg";
// styles
import {
  MentorContainer,
  FotoMentor,
  DadosMentor,
  AreaDeAtuacao,
  PerfilHeader,
  Biografia,
} from "./styles";
// components
import Header from "../../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "../../components/Menu";
import { Button } from "../../styles/objects/button";
import BottomButton from "../../components/BottomButton";
import BottomMenu from "../../components/BottomMenu";
import ReturnButton from "../../components/ReturnButton";

const MentorPerfil = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <MentorContainer>
      <PerfilHeader>
        <ReturnButton to="/inicio" type={2} />
        <FotoMentor>Foto Mentor</FotoMentor>
        <AreaDeAtuacao>Area de atuação</AreaDeAtuacao>
      </PerfilHeader>

      <DadosMentor>
        <h2>Jossana Luz</h2>
        <p>Mentor</p>
      </DadosMentor>

      <Container fluid>
        <Biografia>
          <h2>Biografia</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </Biografia>

        <Button as="button" onClick={handleLogout}>
          Sair da conta
        </Button>

        <Row>
          <BottomMenu />
        </Row>
      </Container>
    </MentorContainer>
  );
};

export default MentorPerfil;
