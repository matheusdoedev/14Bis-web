import React from "react";
// layouts
import PaginaInterna from "../../layouts/Pagina-Interna";
// components
import BottomButton from "../../components/BottomButton";

const QuemSomos = () => {
  return (
    <PaginaInterna title="Quem Somos">
      <p>A 14 Bis é uma empresa..........</p>
      <h2>O que a 14 Bis faz por você?</h2>
      <p>Ela pode ajudar assim, assim e assado.</p>
      <p>Quer conhecer mais sobre nossos parceiros?</p>

      <BottomButton label="Nossos Parceiros" to="/nossos-parceiros" />
    </PaginaInterna>
  );
};

export default QuemSomos;
