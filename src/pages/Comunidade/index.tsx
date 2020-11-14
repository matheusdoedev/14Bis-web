import React from "react";
// layouts
import PaginaInterna from "../../layouts/Pagina-Interna";
// components
import Modal from "../../components/Modal";
import { SecondaryButton } from "../../styles/objects/button";
import BottomButton from "../../components/BottomButton";
import TextList from "../../components/TextList";
import { Col } from "react-bootstrap";

const Comunidades = () => {
  return (
    <>
      <PaginaInterna title="Comunidade">
        <Col xs="12" md="6">
          <h2>
            &gt; Por que entrar em uma comunidade?
            <br />
            <br />
            Em uma comunidade você pode...
          </h2>

          <TextList
            options={[
              {
                content:
                  "Trocar ideias e experiências com empresas, mentores e consultores;",
              },
              {
                content:
                  "Construir uma boa imagem da sua startup frente ao público;",
              },
              {
                content: "Se destacar no mercado.",
              },
            ]}
          />

          <BottomButton label="Quero achar uma!" to="/comunidades" />
        </Col>

        <Col xs="12" md="6"></Col>
      </PaginaInterna>

      <Modal
        name="comunidade"
        title="Falta pouco para você entrar na comunidade que vai te ajudar a crescer!"
        content="Para melhor te ajudar a encontar comunidades, precisamos que você atualize o perfil de sua empresa."
      >
        <SecondaryButton to="/startups/0/editar-dados">
          Atualizar Perfil
        </SecondaryButton>
      </Modal>
    </>
  );
};

export default Comunidades;
