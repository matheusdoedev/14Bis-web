import React from "react";
// styles
import { EstatisticaContainer } from "./styles";
// components
import { Container } from "../../styles/objects/container";
import Header from "../../components/Header";
import ReturnButton from "../../components/ReturnButton";
import Title from "../../components/Title";
import BottomMenu from "../../components/BottomMenu";

const Estatistica = () => {
  return (
    <EstatisticaContainer>
      <Container>
        <Header>
          <ReturnButton to="/startups/0/perfil" />
        </Header>

        <Title title="Estatistica" />

        <p>
          empresa..........osdisdjsdjsjsodsjsidjiosdioasjjxijxijxjcijcjcijcijcijcijicjcijcijcijcijdjdjdjdjaiaiaiiiiiiiiisaidsdidkcckkac.
        </p>

        <BottomMenu />
      </Container>
    </EstatisticaContainer>
  );
};

export default Estatistica;
