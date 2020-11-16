import React from "react";
// imgs
import arrowLeft from "../../assets/arrow-left.svg";
import arrow from "../../assets/arrow.svg";
// styles
import { ReturnButtonContainer } from "./styles";

interface ReturnButtonProps {
  to: string;
  type?: number;
}

const ReturnButton: React.FC<ReturnButtonProps> = ({ to, type }) => {
  return (
    <ReturnButtonContainer to={to}>
      {type === 2 ? (
        <img src={arrow} alt="Voltar" />
      ) : (
        <img src={arrowLeft} alt="Voltar" />
      )}
    </ReturnButtonContainer>
  );
};

export default ReturnButton;
