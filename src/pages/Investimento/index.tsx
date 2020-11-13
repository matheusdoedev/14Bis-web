import React from "react";
// layouts
import PaginaInterna from "../../layouts/Pagina-Interna";

const Investimento = () => {
  return (
    <PaginaInterna
      title="Investimento"
      bottomButtonLabel="Encontrar Investidor"
      bottomButtonPath="/investimento"
    >
      <p>
        O que é investimento? Quem são os investidores? Quando posso pedir um
        investimento? Benefícios de um ivestimento.
      </p>
      <h2>Encontrar um Investidor</h2>
      <p>Ela pode ajudar assim, assim e assado. </p>
      <p>Quer conhecer mais sobre nossos parceiros?</p>
    </PaginaInterna>
  );
};

export default Investimento;
