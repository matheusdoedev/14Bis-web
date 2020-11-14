import React, { useContext } from "react";
// styles
import { ReturnButton, PaginaInternaContainer, Conteudo } from "./styles";
// imgs
import arrowLeft from "../../assets/arrow-left.svg";
// components
import Header from "../../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import BottomMenu from "../../components/BottomMenu";
import HeaderDesktop from "../../components/Header-desktop";
// context
import { ModalContext } from "../../hooks/modal";

interface PaginaInternaProps {
  title: string;
}

const PaginaInterna: React.FC<PaginaInternaProps> = ({ children, title }) => {
  const modalContext = useContext(ModalContext);

  return (
    <PaginaInternaContainer
      data-anime="modal"
      onClick={() => modalContext?.handleInactive()}
    >
      <HeaderDesktop />
      <Header>
        <ReturnButton to="/inicio">
          <img src={arrowLeft} alt="Voltar" />
        </ReturnButton>
      </Header>
      <Container fluid>
        <Row>
          <Col xs="12">
            <h1>{title}</h1>
          </Col>
        </Row>

        <Row>{children}</Row>

        <Row>
          <BottomMenu />
        </Row>
      </Container>
    </PaginaInternaContainer>
  );
};

export default PaginaInterna;
