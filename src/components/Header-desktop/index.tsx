import React from "react";
// styles
import { HeaderContainer, NavWrapper } from "./styles";
// components
import Brand from "../Brand";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderDesktop = () => {
  const perfil = localStorage.getItem("Perfil");

  return (
    <HeaderContainer>
      <Container fluid>
        <Row style={{ alignItems: "center" }}>
          <Col md="5">
            <Brand />
          </Col>

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
                    perfil === "Mentor"
                      ? "/mentores/perfil"
                      : "/startups/perfil"
                  }
                >
                  Conta
                </Link>
              </li>
            </ul>
          </NavWrapper>
        </Row>
      </Container>
    </HeaderContainer>
  );
};

export default HeaderDesktop;
