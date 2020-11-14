import React, { useContext } from "react";
// imgs
import closeIcon from "../../assets/close-button.svg";
// styles
import { ModalContainer, CloseButton } from "./styles";
// context
import { ModalContext } from "../../hooks/modal";

interface ModalProps {
  name: string;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ name, children, title, content }) => {
  const modalContext = useContext(ModalContext);

  return (
    <>
      <ModalContainer data-modal={name}>
        <h2>{title}</h2>
        <p>{content}</p>

        {children}

        <CloseButton as="button" onClick={modalContext?.handleInactive}>
          <img src={closeIcon} alt="Close" />
        </CloseButton>
      </ModalContainer>
    </>
  );
};

export default Modal;
