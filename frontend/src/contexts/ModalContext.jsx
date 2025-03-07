import React, { createContext, useState, useContext } from "react";
import Modal from "../components/Modal.jsx";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
      {isModalOpen && <Modal onClose={closeModal} />}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
