import React, { useState, useEffect, useContext } from 'react';
import { StyledOverlay, StyledModal } from './Style/style.js';
import { BoardContext } from './App.jsx';

function Modal() {
  const { modal, setModal, winner, board, currentGuess, targetWord } =
    useContext(BoardContext);

  return (
    <div>
      {modal ? (
        <StyledOverlay>
          <StyledModal>
            {winner ? 'Winner' : `Go back to school! The word was ${targetWord}`}
          </StyledModal>
        </StyledOverlay>
      ) : null}
    </div>
  );
}

export default Modal;
