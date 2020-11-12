import React from "react";
// imgs
import logoImg from "../../assets/logo-2.svg";
import arrowRight from "../../assets/arrow-right.svg";
// styles
import { PaginaPrincipalContainer, Menu, Conteudo } from "./styles";
// components
import Header from "../../components/Header";
import { Container } from "../../styles/objects/container";
import { Link } from "react-router-dom";
import BottomMenu from "../../components/BottomMenu";

interface Option {
  path: string;
  label: string;
}

const MenuOptions: Option[] = [
  { path: "/quem-somos", label: "Sobre a 14Bis" },
  { path: "/consultorias", label: "Consultorias" },
  { path: "/mentorias", label: "Mentorias" },
  { path: "/investimento", label: "Investimento" },
  { path: "/comunidade", label: "Comunidade" },
  { path: "/forum", label: "Fórum" },
  { path: "/quem-somos", label: "Nossos Parceiros" },
];

const PaginaInicial = () => {
  return (
    <PaginaPrincipalContainer>
      <Container>
        <Header>
          <img src={logoImg} alt="14Bis" />
        </Header>

        <h1>Para o seu sucesso, 14 Bis é o caminho.</h1>
        <p>O que a 14 Bis faz por você?</p>

        <Conteudo>
          <Menu>
            {MenuOptions.map((option) => (
              <Link key={option.path} to={option.path}>
                {option.label}{" "}
                <img src={arrowRight} alt="Ir para a proxima página" />
              </Link>
            ))}
          </Menu>
        </Conteudo>

        <BottomMenu />
      </Container>
    </PaginaPrincipalContainer>
  );
};

export default PaginaInicial;
