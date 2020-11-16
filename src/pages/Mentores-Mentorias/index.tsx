import React from "react";
// styles
import { Parabens } from "./styles";
// layouts
import PaginaInterna from "../../layouts/Pagina-Interna";
// components
import BottomButton from "../../components/BottomButton";
import TextList from "../../components/TextList";
import { Col } from "react-bootstrap";

const Consultorias = () => {
  return (
    <>
      <PaginaInterna title="Bem vindo(a), Mentor(a)!">
        <Col xs="12" md="6">
          <Parabens>
            Parabéns pela iniciativa de ajudar outros a alcançarem seu sucesso!
          </Parabens>

          <h2>Objetivos do Mentor</h2>

          <TextList
            options={[
              {
                content:
                  "Orientar e dar sugestões práticas de como o mentorado pode melhorar o negócio e posicionar sua startup no mercado, com base nas experiências que adquiriu;",
              },
              {
                content:
                  "Apresentar contatos que podem ajudar o mentorado a desenvolver o seu negócio;",
              },
              {
                content:
                  "Recomendar outras fontes de conhecimento que podem ajudar na formação e no desenvolvimento pessoal e profissional do mentorado.",
              },
            ]}
          />
        </Col>

        <Col xs="12" md="6">
          <h2>Por que ser um mentor ?</h2>

          <TextList
            options={[
              {
                content:
                  "Ter acesso a conhecimentos e contatos novos, aprendendo com o processo de ajudar o mentorado;",
              },
              {
                content:
                  "Ajudar empreendedores iniciantes no momento em que eles mais precisam, tendo uma oportunidade de “give back” pela ajuda que já receberam;",
              },
              {
                content:
                  "Desenvolver habilidades de liderança, como comunicação, planejamento estratégico, visão sistêmica de negócios e flexibilidade.",
              },
            ]}
          />
          <BottomButton label="Torna-me mentor" to="/agendar-consultoria" />
        </Col>
      </PaginaInterna>
    </>
  );
};

export default Consultorias;
