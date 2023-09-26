import React, { useState, useEffect } from "react";

function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    openModal,
    closeModal,
  };
}

function App() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="App">
      <h1>Modal Example</h1>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div style={{ backgroundColor: "aqua" }}>
          <h2>Modal Content</h2>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
