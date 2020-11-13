import React from "react";
// styles
import { ModalContainer } from "./styles";

interface ModalProps {
  name: string;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ name, children, title, content }) => {
  return (
    <ModalContainer data-modal={name}>
      <h2>{title}</h2>
      <p>{content}</p>

      {children}
    </ModalContainer>
  );
};

export default Modal;
