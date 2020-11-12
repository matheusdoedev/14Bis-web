import React from "react";
// styles
import {
  ReturnButton,
  PaginaInternaContainer,
  BottomButton,
  Conteudo,
} from "./styles";
// imgs
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
// components
import Header from "../../components/Header";
import { Container } from "../../styles/objects/container";
import BottomMenu from "../../components/BottomMenu";

interface PaginaInternaProps {
  title: string;
  bottomButtonLabel: string;
  bottomButtonPath: string;
}

const PaginaInterna: React.FC<PaginaInternaProps> = ({
  children,
  title,
  bottomButtonLabel,
  bottomButtonPath,
}) => {
  return (
    <PaginaInternaContainer>
      <Container>
        <Header>
          <ReturnButton to="/inicio">
            <img src={arrowLeft} alt="Voltar" />
          </ReturnButton>
        </Header>

        <h1>{title}</h1>

        <Conteudo>{children}</Conteudo>

        <BottomButton to={bottomButtonPath}>
          {bottomButtonLabel}{" "}
          <img src={arrowRight} alt="Ir para a proxima página" />
        </BottomButton>

        <BottomMenu />
      </Container>
    </PaginaInternaContainer>
  );
};

export default PaginaInterna;
