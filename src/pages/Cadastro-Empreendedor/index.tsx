import React from "react";
// styles
import {
  CadastroEmpreendedorContainer,
  CadastroEmpreendedorForm,
} from "./styles";
// components
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../../styles/objects/button";
import { InputGroup } from "../../styles/objects/input-group";
import Input from "../../components/Input";
import Select from "../../components/Select";
// hooks
import { useCreateStartup } from "../../hooks/create-startup";

const CadastroEmpreendedor = () => {
  const {
    NOME_FANTASIA,
    RAZAO_SOCIAL,
    DT_FUNDACAO,
    ID_SEGUIMENTO_PRINC,
    ID_MODELO_NEGOCIO,
    ID_MOMENTO,
    ID_TAMANHO_TIME,
    ID_FATURAMENTO_ANUAL,
    ID_SEGUIMENTO_SECUN,
    ID_PUBLICO_ALVO,
    setPUBLICOALVO,
    setNOMEFANTASIA,
    setRAZAOSOCIAL,
    setFUNDACAO,
    setSEGUIMENTOPRINCIPAL,
    setMODELONEGOCIO,
    setMOMENTO,
    setTAMANHOTIME,
    setFATURAMENTOANUAL,
    setSEGUIMENTOSECUN,
    handleCreateStartup,
  } = useCreateStartup();

  return (
    <CadastroEmpreendedorContainer>
      <Container fluid>
        <Row>
          <Col xs="12" md={{ offset: 3, span: 6 }}>
            <CadastroEmpreendedorForm onSubmit={handleCreateStartup}>
              <h1>Seja bem vindo(a)!</h1>

              <fieldset>
                <h3>Nós queremos te ajudar a econtrar o que você precisa!</h3>
                <h3>Então, conta aí pra gente:</h3>

                <h2>Em qual perfil você se encaixa?</h2>

                <Input
                  name="nome-da-startup"
                  label="Nome da startup"
                  placeholder="digite o nome da sua Startup"
                  value={NOME_FANTASIA}
                  onChange={(e) => setNOMEFANTASIA(e.target.value)}
                />

                <Input
                  name="descricao-da-startup"
                  label="Descrição da Startup"
                  value={RAZAO_SOCIAL}
                  onChange={(e) => setRAZAOSOCIAL(e.target.value)}
                />

                <InputGroup>
                  <Input
                    type="date"
                    name="data-de-fundacao"
                    label="Data da fundação"
                    placeholder="descreva brevemente sua Startup"
                    value={DT_FUNDACAO}
                    onChange={(e) => setFUNDACAO(e.target.value)}
                  />
                  <Select
                    name="segmento"
                    label="Segmento"
                    value={ID_SEGUIMENTO_SECUN}
                    setValue={setSEGUIMENTOSECUN}
                    options={[
                      { value: 1, label: "Segurança e Defesa" },
                      { value: 2, label: "Recursos Humanos" },
                      { value: 3, label: "Hardware" },
                      { value: 4, label: "Logística e Mobilidade Urbana" },
                      { value: 5, label: "Seguros" },
                      { value: 6, label: "Energia" },
                      { value: 7, label: "Cloud Computing" },
                      { value: 8, label: "Produtos de Consumo" },
                      { value: 9, label: "Meio Ambiente" },
                      { value: 10, label: "Automobilismo" },
                      { value: 11, label: "Mobile" },
                      { value: 12, label: "Direito" },
                      { value: 13, label: "Pets" },
                      { value: 14, label: "Advertising" },
                      { value: 15, label: "Eventos e Turismo" },
                      { value: 16, label: "Nanotecnologia" },
                      { value: 17, label: "Construção Civil" },
                      { value: 18, label: "Indústria" },
                      { value: 19, label: "Imobiliário" },
                      { value: 20, label: "Finanças" },
                      { value: 21, label: "Educação" },
                      { value: 22, label: "Infantil" },
                      { value: 23, label: "Biotecnologia" },
                      { value: 24, label: "Esportes" },
                      { value: 25, label: "TIC e Telecom" },
                      { value: 26, label: "Transportes" },
                      { value: 27, label: "Agronegócio" },
                      { value: 28, label: "Vendas e Marketing" },
                      { value: 29, label: "E-Commerce" },
                      { value: 30, label: "Desenvolvimento de Software" },
                      { value: 31, label: "Recrutamento" },
                      { value: 32, label: "Gestão" },
                      { value: 33, label: "Big Data" },
                      { value: 34, label: "Vídeo" },
                      { value: 35, label: "Casa e Família" },
                      { value: 36, label: "Games" },
                      { value: 37, label: "Moda e Beleza" },
                      { value: 38, label: "CRM" },
                      { value: 39, label: "Outros" },
                      { value: 40, label: "Internet" },
                      { value: 41, label: "Saúde e Bem-estar" },
                      { value: 42, label: "Varejo / Atacado" },
                      { value: 43, label: "Serviços Profissionais" },
                      { value: 44, label: "Comunicação e Mídia" },
                      { value: 45, label: "Entretenimento" },
                    ]}
                  />
                </InputGroup>

                <InputGroup>
                  <Select
                    name="publico-alvo"
                    label="Público Alvo"
                    value={ID_PUBLICO_ALVO}
                    setValue={setPUBLICOALVO}
                    options={[
                      { value: 1, label: "B2S" },
                      { value: 2, label: "B2B2C" },
                      { value: 3, label: "B2B" },
                      { value: 4, label: "B2G" },
                      { value: 5, label: "P2P" },
                      { value: 6, label: "B2C" },
                    ]}
                  />

                  <Select
                    name="modelo-de-negocio"
                    label="Modelo de Negócio"
                    value={ID_MODELO_NEGOCIO}
                    setValue={setMODELONEGOCIO}
                    options={[
                      { value: 1, label: "E-Commerce" },
                      { value: 2, label: "Hardware" },
                      { value: 3, label: "Marketplace" },
                      { value: 4, label: "Licenciamento" },
                      { value: 5, label: "Venda de dados" },
                      { value: 6, label: "API" },
                      { value: 7, label: "Outros" },
                      { value: 8, label: "Consumer" },
                      { value: 9, label: "SaaS" },
                    ]}
                  />
                </InputGroup>

                <InputGroup>
                  <Select
                    name="estagio-da-startup"
                    label="Estágio da Startup"
                    value={ID_MOMENTO}
                    setValue={setMOMENTO}
                    options={[
                      { value: 1, label: "Ideação" },
                      { value: 2, label: "Operação" },
                      { value: 3, label: "Tração" },
                      { value: 4, label: "Scaleup" },
                      { value: 5, label: "Fora de operação" },
                    ]}
                  />

                  <Select
                    name="funcionarios"
                    label="Funcionários"
                    value={ID_TAMANHO_TIME}
                    setValue={setTAMANHOTIME}
                    options={[
                      { value: 1, label: "1-5" },
                      { value: 2, label: "6-10" },
                      { value: 3, label: "11-20" },
                      { value: 4, label: "21-50" },
                      { value: 5, label: "51-100" },
                      { value: 6, label: "101-200" },
                      { value: 7, label: "201-500" },
                      { value: 8, label: "501-1000" },
                      { value: 9, label: "1001-5000" },
                      { value: 10, label: "5001+" },
                    ]}
                  />
                </InputGroup>
                <Select
                  name="faturamento-anual"
                  label="Faturamento Anual"
                  value={ID_FATURAMENTO_ANUAL}
                  setValue={setFATURAMENTOANUAL}
                  options={[
                    { value: 1, label: "0" },
                    { value: 2, label: "1 a 50 mil" },
                    { value: 3, label: "50 mil a 250 mil" },
                    { value: 4, label: "250 mil a 500 mil" },
                    { value: 5, label: "500 mil a 1 milhão" },
                    { value: 6, label: "1 milhão a 2,5 milhões" },
                    { value: 7, label: "2,5 milhões a 5 milhões" },
                    { value: 8, label: "+5 milhões" },
                  ]}
                />
              </fieldset>
              <Button as="button" type="submit">
                Continuar
              </Button>
            </CadastroEmpreendedorForm>
          </Col>
        </Row>
      </Container>
    </CadastroEmpreendedorContainer>
  );
};

export default CadastroEmpreendedor;
