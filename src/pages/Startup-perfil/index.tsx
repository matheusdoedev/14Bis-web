import React from "react";
// imgs
import faturamentoImg from "../../assets/faturamento.svg";
import b2cImg from "../../assets/b2c.svg";
import funcionariosImg from "../../assets/funcionarios-2.svg";
import momentoImg from "../../assets/momento.svg";
import badgeInovativaImg from "../../assets/badge-inovativa.svg";
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
  DadosItemIcon,
  DadosItemProgress,
  Conquistas,
  PublicoAlvo,
} from "./styles";
// components
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Menu from "../../components/Menu";
import { Button } from "../../styles/objects/button";
import BottomMenu from "../../components/BottomMenu";
// hooks
import { useGetStartup } from "../../hooks/get-startup";

const Perfil = () => {
  const { startup } = useGetStartup();

  return (
    <PerfilContainer>
      <PerfilHeader>
        <LogoEmpresa>Logo</LogoEmpresa>
        <LevelEmpresa>Level da Empresa</LevelEmpresa>
      </PerfilHeader>

      <Container fluid>
        <Row style={{ alignItems: "center", marginTop: "var(--gap-xl)" }}>
          <Col xs="8">
            <NomeDaEmpresa>Nome da empresa</NomeDaEmpresa>

            <Segmento>
              <span>Segmento:</span>
              <p>{startup?.ID_SEGUIMENTO_PRINC}</p>
            </Segmento>
          </Col>
          <Col xs="4">
            <PublicoAlvo>
              <span>Publico Alvo</span>
              <img src={b2cImg} alt="Publico Alvo" />
              <span>{startup?.ID_PUBLICO_ALVO}</span>
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
                <DadosItemIcon>
                  <img src={faturamentoImg} alt="Faturamento" />
                  <span>Faturamento</span>
                </DadosItemIcon>
                <DadosItemProgress>
                  <span>5.000 - 10.000</span>
                  <ProgressBar now={60} />
                </DadosItemProgress>
              </DadosItem>
              <DadosItem>
                <DadosItemIcon>
                  <img src={funcionariosImg} alt="Funcionários" />
                  <span>Funcionários</span>
                </DadosItemIcon>
                <DadosItemProgress>
                  <span>52</span>
                  <ProgressBar now={60} />
                </DadosItemProgress>
              </DadosItem>
              <DadosItem>
                <DadosItemIcon>
                  <img src={momentoImg} alt="Momento" />
                  <span>Momento</span>
                </DadosItemIcon>
                <DadosItemProgress>
                  <p>Operação</p>
                </DadosItemProgress>
              </DadosItem>
            </Dados>
          </Col>
        </Row>

        <Row style={{ marginBottom: "var(--gap-lg)" }}>
          <Col xs="12">
            <Conquistas>
              <h2>Conquistas</h2>
              <img src={badgeInovativaImg} alt="Badge Inovativa" />
            </Conquistas>
          </Col>
        </Row>

        <Row>
          <BottomMenu />
        </Row>
      </Container>
    </PerfilContainer>
  );
};

export default Perfil;
