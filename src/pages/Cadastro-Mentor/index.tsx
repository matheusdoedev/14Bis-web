import React, { FormEvent } from "react";
import { useHistory } from "react-router-dom";
// styles
import { CadastroMentorContainer, CadastroMentorForm } from "./styles";
// components
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../../styles/objects/button";
import { InputGroup } from "../../styles/objects/input-group";
import Input from "../../components/Input";
import Select from "../../components/Select";
// hooks
import { useCreateMentor } from "../../hooks/create-mentor";
import Textarea from "../../components/Textarea";

const CadastroMentor = () => {
  const {
    CPF,
    ESCOLARIDADE,
    ID_AREA_ATUACAO,
    DT_NASCIMENTO,
    SEXO,
    CURRICULO_RESUMIDO,
    CEP,
    ENDERECO,
    CIDADE,
    UF,
    FONE_FIXO,
    FONE_CELULAR,
    LINKEDIN,
    setFONEFIXO,
    setFONECELULAR,
    setLINKEDIN,
    setCEP,
    setENDERECO,
    setCIDADE,
    setUF,
    setCPF,
    setESCOLARIDADE,
    setAREADEATUACAO,
    setDATADENASCIMENTO,
    setSEXO,
    setCURRICULORESUMIDO,
    handleCreateMentor,
  } = useCreateMentor();

  const history = useHistory();

  return (
    <CadastroMentorContainer>
      <Container fluid>
        <Row>
          <Col xs="12" md={{ offset: 3, span: 6 }}>
            <CadastroMentorForm
              onSubmit={(e: FormEvent) => {
                e.preventDefault();

                handleCreateMentor(e, () => {
                  history.push("/inicio");
                });
              }}
            >
              <h1>Seja bem vindo(a) Mentor(a)!</h1>

              <Input
                name="cpf"
                label="CPF"
                value={CPF}
                onChange={(e) => setCPF(e.target.value)}
              />

              <Select
                name="escolaridade"
                label="Escolaridade"
                value={ESCOLARIDADE}
                setValue={setESCOLARIDADE}
                options={[
                  { value: 1, label: "Analfabeto" },
                  {
                    value: 2,
                    label: "Fundamental incompleto",
                  },
                  {
                    value: 3,
                    label: "Fundamental Completo",
                  },
                  { value: 4, label: "Médio Incompleto" },
                  { value: "Médio Completo", label: "Médio Completo" },
                  {
                    value: 5,
                    label: "Superior Incompleto",
                  },
                  { value: 6, label: "Superior Completo" },
                  { value: 7, label: "Pós-graduação" },
                  { value: 8, label: "Mestrado" },
                  { value: 9, label: "Doutorado" },
                ]}
              />

              <Select
                name="área de atuação"
                label="Área de atuação"
                value={ID_AREA_ATUACAO}
                setValue={setAREADEATUACAO}
                options={[
                  { value: 1, label: "Administração e negócios" },
                  { value: 2, label: "Artes e design" },
                  { value: 3, label: "Ciências Exatas e informática" },
                  { value: 4, label: "Ciências humanas e sociais" },
                  { value: 5, label: "Comunicação e informação" },
                  { value: 6, label: "Engenharia" },
                  { value: 7, label: "Meio ambiente e Ciências agrárias" },
                  { value: 8, label: "Saúde" },
                ]}
              />

              <InputGroup>
                <Input
                  type="date"
                  name="data de nascimento"
                  label="Data de nascimento"
                  value={DT_NASCIMENTO}
                  onChange={(e) => setDATADENASCIMENTO(e.target.value)}
                />

                <Select
                  name="sexo"
                  label="Sexo"
                  value={SEXO}
                  setValue={setSEXO}
                  options={[
                    { value: 1, label: "Masculino" },
                    { value: 2, label: "Feminino" },
                  ]}
                />
              </InputGroup>

              <Input
                name="telefone fixo"
                label="Telefone Fixo"
                value={FONE_FIXO}
                onChange={(e) => setFONEFIXO(e.target.value)}
              />

              <Input
                name="telefone celular"
                label="Telefone Celular"
                value={FONE_CELULAR}
                onChange={(e) => setFONECELULAR(e.target.value)}
              />

              <Input
                type="url"
                name="linkedin"
                label="Linkedin"
                value={LINKEDIN}
                onChange={(e) => setLINKEDIN(e.target.value)}
              />

              <Input
                name="cep"
                label="CEP"
                value={CEP}
                onChange={(e) => setCEP(e.target.value)}
              />

              <Input
                name="endereço"
                label="Endereço"
                value={ENDERECO}
                onChange={(e) => setENDERECO(e.target.value)}
              />

              <InputGroup>
                <Input
                  name="cidade"
                  label="Cidade"
                  value={CIDADE}
                  onChange={(e) => setCIDADE(e.target.value)}
                />

                <Input
                  name="uf"
                  label="UF"
                  value={UF}
                  onChange={(e) => setUF(e.target.value)}
                />
              </InputGroup>

              <Textarea
                name="curriculo resumido"
                label="Currículo resumido (maximo de 255 caracteres)"
                placeholder="escreva um pouco sobre sua jornada (maximo de 255 caracteres)"
                maxLength={255}
                value={CURRICULO_RESUMIDO}
                onChange={(e) => setCURRICULORESUMIDO(e.target.value)}
              />

              <Button as="button" type="submit">
                Continuar
              </Button>
            </CadastroMentorForm>
          </Col>
        </Row>
      </Container>
    </CadastroMentorContainer>
  );
};

export default CadastroMentor;
