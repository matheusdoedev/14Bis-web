import React from "react";
// styles
import { BrandContainer } from "./styles";
// imgs
import logoImg from "../../assets/logo.svg";

const Brand = () => {
  return (
    <BrandContainer to="/">
      <img src={logoImg} alt="14Bis" />
    </BrandContainer>
  );
};

export default Brand;
