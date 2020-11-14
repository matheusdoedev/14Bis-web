import React from "react";
import Modal from "../../components/Modal";
// layouts
import PaginaInterna from "../../layouts/Pagina-Interna";
// components
import { SecondaryButton } from "../../styles/objects/button";
import BottomButton from "../../components/BottomButton";
import { Col } from "react-bootstrap";

const Consultorias = () => {
  return (
    <>
      <PaginaInterna title="Consultorias">
        <Col xs="12" md="6">
          <h2>&gt; O que é uma Consultoria?</h2>
          <p>
            Consultoria empresarial é um serviço que auxilia na identificação e
            resolução de problemas da empresa
          </p>
          <p>
            Seu papel é coletar informações sobre a empresa, desenvolver um
            plano de ação estratégico para que seja colocado em prática e, por
            fim, analisar resultados.
          </p>
          <p>
            Com ela, é possível reduzir custos, tornar processos mais
            eficientes, otimizar as finanças, eficientes, otimizar as finanças,
            planejar expansões do negócio e aprimorar o trabalho do setor de
            recursos humanos, entre outras abordagens.
          </p>
          <p>Gostaria de receber um diagnóstico da sua empresa?</p>

          <BottomButton label="Agendar Consultoria" to="/agendar-consultoria" />
        </Col>
      </PaginaInterna>

      <Modal
        name="consultorias"
        title="Falta pouco para você marcar sua consultoria!"
        content="Para melhor te ajudar a escolher o melhor consultor, precisamos que você atualize o perfil de sua empresa."
      >
        <SecondaryButton to="/startups/0/editar-dados">
          Atualizar Perfil
        </SecondaryButton>
      </Modal>
    </>
  );
};

export default Consultorias;
