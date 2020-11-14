import React from "react";
// styles
import { HeaderContainer, NavWrapper } from "./styles";
// components
import Brand from "../Brand";
import { Container } from "../../styles/objects/container";
import { Link } from "react-router-dom";
import { Row } from "../../styles/objects/row";

const HeaderDesktop = () => {
  const perfil = localStorage.getItem("Perfil");

  return (
    <HeaderContainer>
      <Row style={{ alignItems: "center" }}>
        <Brand />
        <NavWrapper>
          <ul>
            <li>
              <Link to="/inicio">Inicio</Link>
            </li>
            <li>
              <Link
                to={
                  perfil === "Mentor"
                    ? "/mentores/notificações"
                    : "/startups/notificações"
                }
              >
                Notificações
              </Link>
            </li>
            {perfil !== "Mentor" && (
              <li>
                <Link to="/startups/comunidades">Comunidades</Link>
              </li>
            )}
            <li>
              <Link
                to={
                  perfil === "Mentor" ? "/mentores/perfil" : "/startups/perfil"
                }
              >
                Conta
              </Link>
            </li>
          </ul>
        </NavWrapper>
      </Row>
    </HeaderContainer>
  );
};

export default HeaderDesktop;
