import React from "react";
// imgs
import arrowLeft from "../../assets/arrow-left.svg";
// styles
import { ReturnButtonContainer } from "./styles";

interface ReturnButtonProps {
  to: string;
}

const ReturnButton: React.FC<ReturnButtonProps> = ({ to }) => {
  return (
    <ReturnButtonContainer to={to}>
      <img src={arrowLeft} alt="Voltar" />
    </ReturnButtonContainer>
  );
};

export default ReturnButton;
