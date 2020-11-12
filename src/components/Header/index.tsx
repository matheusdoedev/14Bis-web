import React from "react";
// imgs
import logoImg from "../../assets/logo-2.svg";
// styles
import { HeaderContainer } from "./styles";

const Header: React.FC = ({ children }) => {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="14Bis" />
      {children}
    </HeaderContainer>
  );
};

export default Header;
