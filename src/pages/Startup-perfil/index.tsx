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
  Dados,
  DadosItem,
} from "./styles";
// components
import { Container } from "../../styles/objects/container";
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
        <NomeDaEmpresa>Nome da empresa</NomeDaEmpresa>

        <Dados>
          <div>
            <DadosItem>
              <img src={faturamentoImg} alt="Faturamento" />
              <span>Faturamento</span>
            </DadosItem>
            <DadosItem>
              <img src={b2cImg} alt="B2C" />
              <span>B2C</span>
            </DadosItem>
          </div>
          <div>
            <DadosItem>
              <img src={funcionariosImg} alt="Funcionários" />
              <span>Funcionários</span>
            </DadosItem>
            <DadosItem>
              <img src={chartImg} alt="Estatística" />
              <span>Estatística</span>
            </DadosItem>
          </div>
        </Dados>

        <Button to="/" style={{ marginTop: "var(--gap-lg)" }}>
          Sair da conta
        </Button>
      </Container>
    </PerfilContainer>
  );
};

export default Perfil;
