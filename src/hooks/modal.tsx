// hooks
import React, { useState, useEffect, createContext } from "react";

// modal context interface
export interface ModalContextInterface {
  handleActive: (modal: string) => void;
  handleInactive: () => void;
  position: number;
}

// creating modal context
export const ModalContext = createContext<ModalContextInterface | null>(null);

// use modal custom hook
export const Modal: React.FC = ({ children }) => {
  // state to control activity of modals
  const [status, setStatus] = useState(false);
  // state to control which modal is active
  const [currentModal, setCurrentModal] = useState("");
  // state to control modal position
  const [position, setCurrentPosition] = useState<number>(0);

  // to turn off all modals
  const handleInactive = () => {
    if (status) {
      setStatus(false);
    }
  };

  // to turn on a modal
  const handleActive = (modal: string) => {
    handleInactive();

    setCurrentPosition(window.pageYOffset);
    setCurrentModal(modal);
    setStatus(true);
  };

  // here the DOM will be manipulate to turn on/off modals
  useEffect(() => {
    // getting elements
    const modals = document.querySelectorAll(`[data-modal]`);
    const modal = document.querySelector(`[data-modal="${currentModal}"]`);
    const body = document.querySelector(`[data-anime="modal"]`);

    // funtion to turn of all modals
    const clearModals = () => {
      modals.forEach((modal) => {
        modal?.classList.remove("active");
      });
    };

    if (status === true) {
      // if modal state is active, the clearModals will be executed and the active class will be added to current modal and modal class to the body of the page
      clearModals();
      modal?.classList.add("active");
      body?.classList.add("modal");
    } else {
      // else, the clearModals will be executed, the modal class will be removed from page body and current modal set to empty string (no one active).
      clearModals();
      body?.classList.remove("modal");
      setCurrentModal("");
    }
  }, [status, currentModal]);

  return (
    <ModalContext.Provider value={{ handleActive, handleInactive, position }}>
      {children}
    </ModalContext.Provider>
  );
};
