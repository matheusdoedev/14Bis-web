import React from "react";
// imgs
import logoImg from "../../assets/logo-2.svg";
// styles
import { HeaderContainer, LogoHeader } from "./styles";
// components
import { Container, Row, Col } from "react-bootstrap";

const Header: React.FC = ({ children }) => {
  return (
    <HeaderContainer>
      <Container>
        <Row style={{ alignItems: "center" }}>
          <Col xs={{ offset: 3, span: 6 }}>
            <LogoHeader src={logoImg} alt="14Bis" />
          </Col>

          <Col xs="3" style={{ display: "flex", justifyContent: "flex-end" }}>
            {children}
          </Col>
        </Row>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
