import React from "react";
// hooks
import { useAutenticacao } from "../../hooks/user-authentication";
// styles
import { ForgotPasswordButton, HomeContainer, LoginForm } from "./styles";
// components
import { Container } from "../../styles/objects/container";
import Input from "../../components/Input";
import { Button, SecondaryButton } from "../../styles/objects/button";
import Brand from "../../components/Brand";

const Home = () => {
  const {
    email,
    handleUserAuthentication,
    senha,
    setEmail,
    setSenha,
  } = useAutenticacao();

  return (
    <HomeContainer>
      <Container>
        <Brand />

        <LoginForm onSubmit={handleUserAuthentication}>
          <h1>Faça login</h1>

          <Input
            type="email"
            name="email"
            label="E-mail"
            placeholder="Digite o seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            name="senha"
            label="Senha"
            placeholder="Digite a sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <Button as="button" type="submit">
            Entrar
          </Button>
          <ForgotPasswordButton to="/recuperar-senha">
            Esqueceu a senha
          </ForgotPasswordButton>
          <SecondaryButton to="/cadastro">Criar conta</SecondaryButton>
        </LoginForm>
      </Container>
    </HomeContainer>
  );
};

export default Home;
