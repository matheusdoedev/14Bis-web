import React, { FormEvent } from "react";
// hooks
import { useHistory } from "react-router-dom";
import { useAutenticacao } from "../../hooks/user-authentication";
// styles
import { ForgotPasswordButton, HomeContainer, LoginForm } from "./styles";
// components
import { Container, Row, Col } from "react-bootstrap";
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

  const history = useHistory();

  return (
    <HomeContainer>
      <Container fluid>
        <Row>
          <Col xs="12">
            <Brand />
          </Col>
        </Row>

        <Row>
          <Col xs="12" md={{ offset: 3, span: 6 }}>
            <LoginForm
              onSubmit={(e: FormEvent) => {
                e.preventDefault();

                handleUserAuthentication(e, () => {
                  history.push("/inicio");
                });
              }}
            >
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
          </Col>
        </Row>
      </Container>
    </HomeContainer>
  );
};

export default Home;
