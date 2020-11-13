import React from "react";
// styles
import { LogoInovativa } from "./styles";
// imgs
import logoInovativa from "../../assets/logo-inovativa.svg";
// layouts
import PaginaInterna from "../../layouts/Pagina-Interna";

const NossosParceiros = () => {
  return (
    <PaginaInterna
      title="Nossos Parceiros"
      bottomButtonLabel="Saiba Mais"
      bottomButtonPath="/nossos-parceiros/saiba-mais"
    >
      <h2>O que é a InovAtiva?</h2>
      <p>
        “Criado em 2013 pelo Ministério da Indústria, Comércio Exterior e
        Serviços (MDIC) e realizado pelo ministério em parceria com o SEBRAE, o
        InovAtiva Brasil é o maior e mais abrangente programa de aceleração de
        startups do país.” (https://www.inovativabrasil.com.br/sobre/)
      </p>
      <LogoInovativa src={logoInovativa} alt="Inovativa" />
    </PaginaInterna>
  );
};

export default NossosParceiros;
