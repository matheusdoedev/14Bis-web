import React from "react";
// styles
import { TitleWithIcon } from "./styles";
// imgs
import familyImg from "../../assets/family.svg";
import crowdfundingImg from "../../assets/crowdfunding.svg";
import aceleradoraImg from "../../assets/aceleradora.svg";
import investimentoAnjoImg from "../../assets/investidor-anjo.svg";
import seedCapitalImg from "../../assets/seed-capital.svg";
// layouts
import PaginaInterna from "../../layouts/Pagina-Interna";
// components
import Modal from "../../components/Modal";
import { SecondaryButton } from "../../styles/objects/button";
import { Col } from "react-bootstrap";

const Investimento = () => {
  return (
    <>
      <PaginaInterna title="Investimento">
        <Col xs="12" md="6">
          <h2>&gt; Por que investir na minha startup?</h2>
          <p>
            Receber um grande aporte financeiro é o sonho de muitos
            empreendedores. Esse dinheiro pode impulsionar um negócio, ajudando
            no seu crescimento e sucesso. Existem vários tipos de investimentos,
            cada um para uma etapa específica do desenvolvimento de uma empresa.
            Veja quais são eles:
          </p>

          <TitleWithIcon>
            <img src={familyImg} alt="Família ou Amigos" />
            Família/Amigos
          </TitleWithIcon>

          <p>
            Essencial para dar um primeiro passo.
            <br />
            Essencial para a fase inicial.
          </p>

          <TitleWithIcon>
            <img src={crowdfundingImg} alt="Crowdfunding" />
            Crowdfunding
          </TitleWithIcon>

          <p>
            Plataforma online para divulgar a startup. Uma pessoa física ou
            jurídica pode escolher investir.
          </p>
        </Col>

        <Col xs="12" md="6">
          <TitleWithIcon>
            <img src={aceleradoraImg} alt="Aceleradora" />
            Aceleradora
          </TitleWithIcon>

          <p>
            Organização que busca startups em fase inicial para acelerar seu
            desenvolvimento.
          </p>

          <TitleWithIcon>
            <img src={investimentoAnjoImg} alt="Investimento Anjo" />
            Investimento Anjo
          </TitleWithIcon>

          <p>Realizado por uma PF ou PJ experiente no mercado.</p>

          <TitleWithIcon>
            <img src={seedCapitalImg} alt="Capital Semente" />
            Capital Semente
          </TitleWithIcon>

          <p>Composto por mais investidores.</p>
        </Col>
      </PaginaInterna>

      <Modal
        name="investimento"
        title="Falta pouco para você investir na sua empresa!"
        content="Para melhor te ajudar a escolher a melhor investidora, precisamos que você atualize o perfil de sua empresa."
      >
        <SecondaryButton to="/startups/0/editar-dados">
          Atualizar Perfil
        </SecondaryButton>
      </Modal>
    </>
  );
};

export default Investimento;
