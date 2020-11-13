import React from "react";
// styles
import { NotificacaoContainer, NotificacaoWrapper } from "./styles";
// components
import { Container } from "../../styles/objects/container";
import Header from "../../components/Header";
import ReturnButton from "../../components/ReturnButton";
import Title from "../../components/Title";
import Menu from "../../components/Menu";
import BottomMenu from "../../components/BottomMenu";

const Notificacao = () => {
  return (
    <NotificacaoContainer>
      <Container>
        <Header>
          <ReturnButton to="/startups/0/notificacoes" />
        </Header>

        <Title title="Notificações" />

        <NotificacaoWrapper>
          <p>
            empresa..........osdisdjsdjsjsodsjsidjiosdioasjjxijxijxjcijcjcijcijcijcijicjcijcijcijcijdjdjdjdjaiaiaiiiiiiiiisaidsdidkcckkac.
            empresa..........osdisdjsdjsjsodsjsidjiosdioasjjxijxijxjcijcjcijcijcijcijicjcijcijcijcijdjdjdjdjaiaiaiiiiiiiiisaidsdidkcckkac.
            empresa..........osdisdjsdjsjsodsjsidjiosdioasjjxijxijxjcijcjcijcijcijcijicjcijcijcijcijdjdjdjdjaiaiaiiiiiiiiisaidsdidkcckkac.
          </p>
        </NotificacaoWrapper>

        <BottomMenu />
      </Container>
    </NotificacaoContainer>
  );
};

export default Notificacao;
