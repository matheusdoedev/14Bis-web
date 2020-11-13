import React from "react";
// styles
import { TermosDeUsoContainer } from "./styles";
// components
import { Container } from "../../styles/objects/container";
import Header from "../../components/Header";
import ReturnButton from "../../components/ReturnButton";
import Title from "../../components/Title";
import BottomMenu from "../../components/BottomMenu";

const TermosDeUso = () => {
  return (
    <TermosDeUsoContainer>
      <Container>
        <Header>
          <ReturnButton to="/startups/0/perfil" />
        </Header>

        <Title title="Termos de uso" />

        <p>
          empresa..........osdisdjsdjsjsodsjsidjiosdioasjjxijxijxjcijcjcijcijcijcijicjcijcijcijcijdjdjdjdjaiaiaiiiiiiiiisaidsdidkcckkac.
        </p>

        <BottomMenu />
      </Container>
    </TermosDeUsoContainer>
  );
};

export default TermosDeUso;
