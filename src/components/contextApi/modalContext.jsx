import { createContext, useState } from 'react';

export const ModalContext = createContext(null);

// ModalProvider.js

const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(null);

  const openModal = (content = 'modal') => {
    setModalOpen(content);
  };

  const closeModal = () => {
    setModalOpen(null);
  };

  const contextData = { openModal, closeModal, isModalOpen };

  return (
    <ModalContext.Provider value={contextData}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
