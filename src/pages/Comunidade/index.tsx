import React from "react";
// layouts
import PaginaInterna from "../../layouts/Pagina-Interna";

const Comunidades = () => {
  return (
    <PaginaInterna
      title="Comunidade"
      bottomButtonLabel="Quero achar uma!"
      bottomButtonPath="/comunidades"
    >
      <p>
        O que é uma comunidade? Quando eu posso entrar em alguma comunidade?
        Benefícios de uma comunidade...
      </p>
      <h2>Encontre uma Comunidade</h2>
      <p>Como encontrar comunidades....... O que fazer em uma comunidade</p>
    </PaginaInterna>
  );
};

export default Comunidades;
