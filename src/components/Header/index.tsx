import React from "react";
// styles
import { HeaderContainer } from "./styles";

const Header: React.FC = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

export default Header;
