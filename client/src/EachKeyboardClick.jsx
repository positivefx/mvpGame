import React, { useState, useEffect, useContext } from 'react';
import { EachKey } from './Style/style.js';
import { BoardContext } from './App.jsx';

function EachKeyboardClick ({letterKeyboard, disableKey}) {
  const { handleEnter, handleDelete, handleLetterSelect} = useContext(BoardContext);

  const handleSelect = () => {
    if (letterKeyboard === 'Enter') {
      handleEnter();

    } else if (letterKeyboard === 'Delete') {
      handleDelete();

    } else {
      handleLetterSelect(letterKeyboard)
    }
  };

  return (
    <EachKey
      keyOut={disableKey}
      onClick={handleSelect}>
      {letterKeyboard}
    </EachKey>
  )

}

export default EachKeyboardClick;