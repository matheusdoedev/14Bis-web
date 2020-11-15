import React, { useContext, FormEvent } from "react";
// styles
import { TriagemContainer, TriagemForm } from "./styles";
// components
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../../styles/objects/button";
import CheckboxList from "../../components/Checkbox-list";
// contexts
import { UsersContext } from "../../hooks/create-user";
import { useHistory } from "react-router-dom";

const Triagem = () => {
  const createUsers = useContext(UsersContext);

  const history = useHistory();

  return (
    <TriagemContainer>
      <Container fluid>
        <Row>
          <Col xs="12" md={{ offset: 3, span: 6 }}>
            <TriagemForm
              onSubmit={(event: FormEvent) => {
                event.preventDefault();

                createUsers?.handleCreateUser(event, (perfil: string) => {
                  if (
                    perfil === "MENTO" ||
                    perfil === "CONSU" ||
                    perfil === "INVES"
                  ) {
                    history.push("/cadastro-mentor");
                  } else {
                    history.push("/cadastro-empreendedor");
                  }
                });
              }}
            >
              <h1>Seja bem vindo(a)!</h1>

              <fieldset>
                <h3>Nós queremos te ajudar a econtrar o que você precisa!</h3>
                <h3>Então, conta aí pra gente:</h3>

                <h2>Em qual perfil você se encaixa?</h2>

                <CheckboxList
                  name="perfil"
                  type="radio"
                  options={[
                    { value: "startup", label: "Startup" },
                    { value: "mentor", label: "Mentor" },
                    {
                      value: "consultor",
                      label: "Consultor",
                    },
                    {
                      value: "investidor",
                      label: "Investidor",
                    },
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
