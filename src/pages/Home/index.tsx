import React from "react";
// styles
import { ForgotPasswordButton, HomeContainer, LoginForm } from "./styles";
// components
import { Container } from "../../styles/objects/container";
import Input from "../../components/Input";
import { Button, SecondaryButton } from "../../styles/objects/button";
import Brand from "../../components/Brand";

const Home = () => {
  return (
    <HomeContainer>
      <Container>
        <Brand />

        <LoginForm>
          <h1>Faça login</h1>

          <Input
            type="email"
            name="email"
            label="E-mail"
            placeholder="Digite o seu e-mail"
          />
          <Input
            type="password"
            name="senha"
            label="Senha"
            placeholder="Digite a sua senha"
          />

          <Button to="/inicio">Entrar</Button>
          <ForgotPasswordButton to="/recupear-senha">
            Esqueceu a senha
          </ForgotPasswordButton>
          <SecondaryButton to="/cadastro">Criar conta</SecondaryButton>
        </LoginForm>
      </Container>
    </HomeContainer>
  );
};

export default Home;
