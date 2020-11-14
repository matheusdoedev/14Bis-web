import React from "react";
import { Col } from "react-bootstrap";
// layouts
import PaginaInterna from "../../layouts/Pagina-Interna";

const Comunidades = () => {
  return (
    <>
      <PaginaInterna title="Notificações">
        <Col xs="12" md="6">
          <p>
            O que é uma comunidade? Quando eu posso entrar em alguma comunidade?
            Benefícios de uma comunidade...
          </p>
        </Col>
      </PaginaInterna>
    </>
  );
};

export default Comunidades;
