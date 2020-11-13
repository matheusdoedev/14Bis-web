import React from "react";
// styles
import { PaginaPrincipalContainer, Conteudo } from "./styles";
// components
import Header from "../../components/Header";
import { Container } from "../../styles/objects/container";
import BottomMenu from "../../components/BottomMenu";
import Menu from "../../components/Menu";
import Title from "../../components/Title";

const PaginaInicial = () => {
  return (
    <PaginaPrincipalContainer data-anime="modal">
      <Container>
        <Header />

        <Conteudo>
          <Title title="Para o seu sucesso, 14 Bis é o caminho." />
          <p>O que a 14 Bis faz por você?</p>

          <Menu
            options={[
              { path: "/quem-somos", label: "Sobre a 14Bis" },
              { path: "/consultorias", label: "Consultorias" },
              { path: "/mentorias", label: "Mentorias" },
              { path: "/investimento", label: "Investimento" },
              { path: "/comunidade", label: "Comunidade" },
              { path: "/forum", label: "Fórum" },
              { path: "/nossos-parceiros", label: "Nossos Parceiros" },
            ]}
          />
        </Conteudo>

        <BottomMenu />
      </Container>
    </PaginaPrincipalContainer>
  );
};

export default PaginaInicial;
