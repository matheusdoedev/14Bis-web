import React, { useContext, FormEvent } from "react";
// styles
import { TriagemContainer, TriagemForm } from "./styles";
// components
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../../styles/objects/button";
import { Checkmark } from "../../styles/objects/checkmark";
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

                <Checkmark>
                  <label>
                    <input
                      type="radio"
                      id="PERFIL"
                      name="PERFIL"
                      onChange={(e) => {
                        createUsers?.setPERFIL(e.target.value);
                      }}
                      checked={createUsers?.PERFIL === "EMPRE"}
                      value="EMPRE"
                    />
                    <span></span>
                  </label>
                  <p>Startup</p>
                </Checkmark>
                <Checkmark>
                  <label>
                    <input
                      type="radio"
                      id="PERFIL"
                      name="PERFIL"
                      onChange={(e) => {
                        createUsers?.setPERFIL(e.target.value);
                      }}
                      checked={createUsers?.PERFIL === "MENTO"}
                      value="MENTO"
                    />
                    <span></span>
                  </label>
                  <p>Mentor</p>
                </Checkmark>
                <Checkmark>
                  <label>
                    <input
                      type="radio"
                      id="PERFIL"
                      name="PERFIL"
                      onChange={(e) => {
                        createUsers?.setPERFIL(e.target.value);
                      }}
                      checked={createUsers?.PERFIL === "CONSU"}
                      value="CONSU"
                    />
                    <span></span>
                  </label>
                  <p>Consultor</p>
                </Checkmark>
                <Checkmark>
                  <label>
                    <input
                      type="radio"
                      id="PERFIL"
                      name="PERFIL"
                      onChange={(e) => {
                        createUsers?.setPERFIL(e.target.value);
                      }}
                      checked={createUsers?.PERFIL === "INVES"}
                      value="INVES"
                    />
                    <span></span>
                  </label>
                  <p>Investidor</p>
                </Checkmark>
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
