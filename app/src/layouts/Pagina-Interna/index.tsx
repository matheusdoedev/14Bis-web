import React, { useContext } from "react";
// styles
import { ReturnButton, PaginaInternaContainer, Conteudo } from "./styles";
// imgs
import arrowLeft from "../../assets/arrow-left.svg";
// components
import Header from "../../components/Header";
import { Container } from "../../styles/objects/container";
import BottomMenu from "../../components/BottomMenu";
// context
import { ModalContext } from "../../hooks/modal";
import HeaderDesktop from "../../components/Header-desktop";
import { Row } from "../../styles/objects/row";

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
      <Container>
        <Row>
          <Header>
            <ReturnButton to="/inicio">
              <img src={arrowLeft} alt="Voltar" />
            </ReturnButton>
          </Header>
        </Row>

        <Row>
          <h1>{title}</h1>
        </Row>

        <Conteudo>{children}</Conteudo>

        <BottomMenu />
      </Container>
    </PaginaInternaContainer>
  );
};

export default PaginaInterna;
