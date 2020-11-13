import React from "react";
// imgs
import verificImg from "../../assets/verific.svg";
// layouts
import PaginaInterna from "../../layouts/Pagina-Interna";
// components
import Modal from "../../components/Modal";
import { SecondaryButton } from "../../styles/objects/button";

const Mentorias = () => {
  return (
    <>
      <PaginaInterna
        title="Mentorias"
        bottomButtonLabel="Agendar Mentorias"
        bottomButtonPath="/mentorias"
      >
        <h2>&gt; Mas, o que faz um mentor?</h2>

        <ul>
          <li>
            <img src={verificImg} alt="Check icone" />
            <p>
              Orienta e dá sugestões práticas de como o mentorado pode melhorar
              o negócio e posicionar sua startup no mercado, com base nas
              experiências que adquiriu;
            </p>
          </li>
          <li>
            <img src={verificImg} alt="Check icone" />
            <p>
              Apresenta contatos que podem ajudar o mentorado a desenvolver o
              seu negócio;
            </p>
          </li>
          <li>
            <img src={verificImg} alt="Check icone" />
            <p>
              Recomendam outras fontes de conhecimento que podem ajudar na
              formação e no desenvolvimento pessoal e profissional do mentorado.
            </p>
          </li>
        </ul>
      </PaginaInterna>

      <Modal
        name="mentorias"
        title="Falta pouco para você marcar sua mentoria!"
        content="Para melhor te ajudar a escolher o melhor mentor, precisamos que você atualize o perfil de sua empresa."
      >
        <SecondaryButton to="/startups/0/editar-dados">
          Atualizar Perfil
        </SecondaryButton>
      </Modal>
    </>
  );
};

export default Mentorias;
