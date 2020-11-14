import React, { FormEvent } from "react";
// hooks
import { useHistory } from "react-router-dom";
// styles
import { TriagemContainer, TriagemForm } from "./styles";
// components
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../../styles/objects/button";
import Input from "../../components/Input";
import CheckboxList from "../../components/Checkbox-list";

const Triagem = () => {
  const history = useHistory();

  const gambiarraSubmit = (event: FormEvent) => {
    event.preventDefault();

    history.push("/inicio");
  };

  return (
    <TriagemContainer>
      <Container fluid>
        <Row>
          <Col xs="12" md={{ offset: 3, span: 6 }}>
            <TriagemForm onSubmit={gambiarraSubmit}>
              <h1>Qual é o seu perfil?</h1>

              <fieldset>
                <h2>Sou um:</h2>
                <CheckboxList
                  name="perfil"
                  required
                  options={[
                    { value: "empreendedor", label: "Empreendedor" },
                    { value: "mentor", label: "Mentor/Consultor" },
                    {
                      value: "futuro-empreendedor",
                      label: "Futuro empreendedor",
                    },
                  ]}
                />
              </fieldset>

              <fieldset>
                <h2>Você já possui uma empresa/startup?</h2>
                <CheckboxList
                  name="possui-empresa-startup"
                  required
                  options={[
                    { value: "sim", label: "Sim" },
                    { value: "não", label: "Não" },
                  ]}
                />
              </fieldset>
              <Button as="button" type="submit">
                Continuar
              </Button>
            </TriagemForm>
          </Col>
        </Row>
      </Container>
    </TriagemContainer>
  );
};

export default Triagem;
