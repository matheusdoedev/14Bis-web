import React from "react";
// layouts
import PaginaInterna from "../../layouts/Pagina-Interna";

const Forum = () => {
  return (
    <PaginaInterna
      title="Fórum"
      bottomButtonLabel="Nossa Metodologia"
      bottomButtonPath="/nossa-metodologia"
    >
      <p>A 14 Bis é uma empresa..........</p>
      <h2>O que a 14 Bis faz por você?</h2>
      <p>Ela pode ajudar assim, assim e assado.</p>
      <p>Quer conhecer mais sobre nossos parceiros?</p>
    </PaginaInterna>
  );
};

export default Forum;
