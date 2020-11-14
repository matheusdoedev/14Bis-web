import React from "react";
// imgs
import faturamentoImg from "../../assets/faturamento.svg";
import b2cImg from "../../assets/b2c.svg";
import funcionariosImg from "../../assets/funcionarios.svg";
import chartImg from "../../assets/chart-bar.svg";
// styles
import {
  PerfilContainer,
  PerfilHeader,
  LogoEmpresa,
  LevelEmpresa,
  NomeDaEmpresa,
  Segmento,
  Dados,
  DadosItem,
  PublicoAlvo,
} from "./styles";
// components
import { Container, Row, Col } from "react-bootstrap";
import Menu from "../../components/Menu";
import { Button } from "../../styles/objects/button";

const Perfil = () => {
  return (
    <PerfilContainer>
      <PerfilHeader>
        <LogoEmpresa>Logo</LogoEmpresa>
        <LevelEmpresa>Level da Empresa</LevelEmpresa>
      </PerfilHeader>

      <Container>
        <Row style={{ alignItems: "center", marginTop: "var(--gap-xl)" }}>
          <Col xs="8">
            <NomeDaEmpresa>Nome da empresa</NomeDaEmpresa>

            <Segmento>
              <span>Segmento:</span>
              <p>Logística e Mobilidade Urbana</p>
            </Segmento>
          </Col>
          <Col xs="4">
            <PublicoAlvo>
              <span>Publico Alvo</span>
              <img src={b2cImg} alt="B2C" />
              <span>B2C</span>
            </PublicoAlvo>
          </Col>
        </Row>

        <Row>
          <Col xs="12" md="6">
            <h2>Sobre</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs="12">
            <Dados>
              <DadosItem>
                <div>
                  <img src={faturamentoImg} alt="Faturamento" />
                  <span>Faturamento</span>
                </div>
                <div>
                  <span>5.000 - 10.000</span>
                </div>
              </DadosItem>
            </Dados>
          </Col>
        </Row>

        <Row>
          <Col xs="12">
            <Button to="/" style={{ marginTop: "var(--gap-lg)" }}>
              Sair da conta
            </Button>
          </Col>
        </Row>
      </Container>
    </PerfilContainer>
  );
};

export default Perfil;
