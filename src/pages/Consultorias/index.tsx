import React from "react";
import Modal from "../../components/Modal";
// layouts
import PaginaInterna from "../../layouts/Pagina-Interna";
// components
import { SecondaryButton } from "../../styles/objects/button";

const Consultorias = () => {
  return (
    <>
      <PaginaInterna
        title="Consultorias"
        bottomButtonLabel="Agendar Consultorias"
        bottomButtonPath="/agendar-consultorias"
      >
        <h2>&gt; O que é uma Consultoria?</h2>
        <p>
          Consultoria empresarial é um serviço que auxilia na identificação e
          resolução de problemas da empresa
        </p>
        <p>
          Seu papel é coletar informações sobre a empresa, desenvolver um plano
          de ação estratégico para que seja colocado em prática e, por fim,
          analisar resultados.
        </p>
        <p>
          Gostaria de ter um diagnóstico da sua empresa? Agende uma consulta!
        </p>
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
