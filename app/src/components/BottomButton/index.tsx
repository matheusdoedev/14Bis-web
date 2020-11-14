import React from "react";
// imgs
import arrowRight from "../../assets/arrow-right.svg";
// styles
import { BottomButtonWrapper } from "./styles";

interface BottomButtonProps {
  label: string;
  to: string;
}

const BottomButton: React.FC<BottomButtonProps> = ({ label, to }) => {
  return (
    <BottomButtonWrapper to={to}>
      {label}
      <img src={arrowRight} alt="Ir para a proxima página" />
    </BottomButtonWrapper>
  );
};

export default BottomButton;
