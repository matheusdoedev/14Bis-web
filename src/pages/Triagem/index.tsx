import React from "react";
// styles
import { TriagemContainer, TriagemForm } from "./styles";
// components
import { Container } from "../../styles/objects/container";
import { Button } from "../../styles/objects/button";

const Triagem = () => {
  return (
    <TriagemContainer>
      <Container>
        <TriagemForm>
          <h1>Como podemos ajudar sua empresa?</h1>

          <Button to="/inicio">Continuar</Button>
        </TriagemForm>
      </Container>
    </TriagemContainer>
  );
};

export default Triagem;
