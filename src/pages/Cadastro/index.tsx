import React, { useContext } from "react";
// styles
import { CadastroContainer, CadastroForm } from "./styles";
// components
import { Container, Row, Col } from "react-bootstrap";
import Input from "../../components/Input";
import { Button } from "../../styles/objects/button";
import Brand from "../../components/Brand";
// contexts
import { UsersContext } from "../../hooks/create-user";

const Cadastro = () => {
  const createUsers = useContext(UsersContext);

  return (
    <CadastroContainer>
      <Container fluid>
        <Row>
          <Col xs="12">
            <Brand />
          </Col>
        </Row>

        <Row>
          <Col xs="12" md={{ offset: 3, span: 6 }}>
            <CadastroForm>
              <h1>Cadastre-se</h1>

              <Input
                name="nome"
                label="Nome"
                placeholder="Digite seu nome"
                value={createUsers?.NAME}
                onChange={(e) => createUsers?.setNAME(e.target.value)}
              />

              <Input
                name="telefone"
                label="Telefone"
                placeholder="Digite seu telefone"
                value={createUsers?.TELEFONE}
                onChange={(e) => createUsers?.setTELEFONE(e.target.value)}
                required
              />

              <Input
                type="email"
                name="email"
                label="E-mail"
                placeholder="Digite seu email"
                value={createUsers?.EMAIL}
                onChange={(e) => createUsers?.setEMAIL(e.target.value)}
                required
              />

              <Input
                type="password"
                name="senha"
                label="Senha"
                placeholder="Digite sua senha"
                onChange={(e) => createUsers?.setSENHA(e.target.value)}
                required
              />

              <Button to="/triagem">Salvar</Button>
            </CadastroForm>
          </Col>
        </Row>
      </Container>
    </CadastroContainer>
  );
};

export default Cadastro;
