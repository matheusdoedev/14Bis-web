import { useEffect, useState, useContext } from "react";
// api
import api from "../services/14bis-api";
// contexts
import { UsersContext } from "../hooks/create-user";

interface Startup {
  ID_STARTUP: number;
  NOME_FANTASIA: string;
  RAZAO_SOCIAL: string;
  DT_FUNDACAO: Date;
  CNPJ: string;
  CEP: string;
  ENDERECO: string;
  UF: string;
  CIDADE: string;
  LINKEDIN: string;
  FACEBOOK: string;
  CAMINHO_FOTO: string;
  INSTAGRAM: string;
  ID_MODELO_NEGOCIO: string;
  ID_PUBLICO_ALVO: string;
  ID_MOMENTO: string;
  ID_SEGUIMENTO_PRINC: string;
  ID_SEGUIMENTO_SECUN: string;
  ID_TAMANHO_TIME: string;
  ID_FATURAMENTO_ANUAL: string;
}

export const useGetStartup = () => {
  const [startup, setStartup] = useState<Startup>();

  const createUsers = useContext(UsersContext);

  useEffect(() => {
    console.log(createUsers?.USER_ID);

    const handleGetStartup = async () => {
      const data = await api
        .get(`startup/9`)
        .then((r) => r.data)
        .catch((err) => {
          alert("Não foi possível carregar o usuário.");
        });

      setStartup(data);
    };

    handleGetStartup();
  }, []);

  return { startup };
};
