import React from "react";
// layouts
import PaginaInterna from "../../layouts/Pagina-Interna";

const QuemSomos = () => {
  return (
    <PaginaInterna
      title="Quem Somos"
      bottomButtonLabel="Nossos Parceiros"
      bottomButtonPath="/nossos-parceiros"
    >
      <p>A 14 Bis é uma empresa..........</p>
      <h2>O que a 14 Bis faz por você?</h2>
      <p>Ela pode ajudar assim, assim e assado.</p>
      <p>Quer conhecer mais sobre nossos parceiros?</p>
    </PaginaInterna>
  );
};

export default QuemSomos;
