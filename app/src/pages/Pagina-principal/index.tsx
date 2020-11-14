import React from "react";
// imgs
import comunidadeImg from "../../assets/comunidade.svg";
import consultoriasImg from "../../assets/consultorias.svg";
import forumImg from "../../assets/forum.svg";
import investimentoImg from "../../assets/investimento.svg";
import mentoriasImg from "../../assets/mentorias.svg";
import nossosParceirosImg from "../../assets/nossos-parceiros.svg";
import quemSomosImg from "../../assets/quem-somos.svg";
// styles
import { PaginaPrincipalContainer, Conteudo } from "./styles";
// components
import Header from "../../components/Header";
import { Container } from "../../styles/objects/container";
import BottomMenu from "../../components/BottomMenu";
import Menu from "../../components/Menu";
import Title from "../../components/Title";
import HeaderDesktop from "../../components/Header-desktop";
import { Row } from "../../styles/objects/row";

const PaginaInicial = () => {
  const perfil = localStorage.getItem("Perfil");

  return (
    <PaginaPrincipalContainer data-anime="modal">
      <Container>
        <HeaderDesktop />
        <Row>
          <Header />
        </Row>

        <Row>
          <Conteudo>
            <Title title="Para o seu sucesso, 14 Bis é o caminho." />
            <p>O que a 14 Bis faz por você?</p>

            {perfil === "Mentor" ? (
              <Menu
                options={[
                  {
                    path: "/quem-somos",
                    label: "Sobre a 14Bis",
                    image: quemSomosImg,
                  },
                  {
                    path: "/mentores/consultorias",
                    label: "Consultorias",
                    image: consultoriasImg,
                  },
                  {
                    path: "/mentores/mentorias",
                    label: "Mentorias",
                    image: mentoriasImg,
                  },
                  {
                    path: "/nossos-parceiros",
                    label: "Nossos Parceiros",
                    image: nossosParceirosImg,
                  },
                ]}
              />
            ) : (
              <Menu
                options={[
                  {
                    path: "/quem-somos",
                    label: "Sobre a 14Bis",
                    image: quemSomosImg,
                  },
                  {
                    path: "/startups/consultorias",
                    label: "Consultorias",
                    image: consultoriasImg,
                  },
                  {
                    path: "/startups/mentorias",
                    label: "Mentorias",
                    image: mentoriasImg,
                  },
                  {
                    path: "/startups/investimento",
                    label: "Investimento",
                    image: investimentoImg,
                  },
                  {
                    path: "/startups/comunidade",
                    label: "Comunidade",
                    image: comunidadeImg,
                  },

                  {
                    path: "/nossos-parceiros",
                    label: "Nossos Parceiros",
                    image: nossosParceirosImg,
                  },
                ]}
              />
            )}
          </Conteudo>
        </Row>

        <BottomMenu />
      </Container>
    </PaginaPrincipalContainer>
  );
};

export default PaginaInicial;
