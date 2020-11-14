import React from "react";
// styles
import { LogoInovativa, LinkInovativa } from "./styles";
// imgs
import logoInovativa from "../../assets/logo-inovativa.svg";
// layouts
import PaginaInterna from "../../layouts/Pagina-Interna";
// components
import BottomButton from "../../components/BottomButton";

const NossosParceiros = () => {
  return (
    <PaginaInterna title="Nossos Parceiros">
      <h2>O que é a InovAtiva?</h2>
      <p>
        “Criado em 2013 pelo Ministério da Indústria, Comércio Exterior e
        Serviços (MDIC) e realizado pelo ministério em parceria com o SEBRAE, o
        InovAtiva Brasil é o maior e mais abrangente programa de aceleração de
        startups do país.”
      </p>

      <LinkInovativa
        rel="noreferrer"
        target="_blank"
        href="https://www.inovativabrasil.com.br/sobre/"
      >
        (https://www.inovativabrasil.com.br/sobre/)
      </LinkInovativa>

      <LogoInovativa
        rel="noreferrer"
        target="_blank"
        href="https://www.inovativabrasil.com.br/sobre/"
      >
        <img src={logoInovativa} alt="Inovativa" />
      </LogoInovativa>

      <BottomButton to="/" label="Saiba mais" />
    </PaginaInterna>
  );
};

export default NossosParceiros;
