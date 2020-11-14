import React from "react";
// img
import arrowRight from "../../assets/arrow-right.svg";
import comunidadeImg from "../../assets/comunidade.svg";
// styles
import { MenuContainer } from "./styles";
// components
import { Link } from "react-router-dom";

interface option {
  path: string;
  label: string;
  image?: string;
}

interface MenuProps {
  options: option[];
}

const Menu: React.FC<MenuProps> = ({ options }) => {
  return (
    <MenuContainer>
      {options.map((option) => (
        <Link key={option.path} to={option.path}>
          {option.image && <img src={option.image} alt={option.image} />}
          <span style={option.image ? undefined : { gridColumnStart: 2 }}>
            {option.label}{" "}
          </span>
          <img src={arrowRight} alt="Ir para a proxima página" />
        </Link>
      ))}
    </MenuContainer>
  );
};

export default Menu;
