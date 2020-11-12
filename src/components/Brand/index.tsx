import React from "react";
// imgs
import logoImg from "../../assets/logo.svg";
// components
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <Link to="/">
      <img src={logoImg} alt="14Bis" />
    </Link>
  );
};

export default Brand;
