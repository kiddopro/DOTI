import React, { createContext, useState, useContext } from "react";
import Modal from "../components/Modal.jsx";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [task, setTask] = useState(null);

  const openModal = (task = null) => {
    setTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setTask(null);
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, task }}>
      {children}
      {isModalOpen && <Modal onClose={closeModal} info={task} />}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
