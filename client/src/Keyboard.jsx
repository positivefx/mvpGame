import React, { useState, useContext, useCallback, useEffect } from 'react';
import EachKeyboardClick from './EachKeyboardClick.jsx';
import { Keys, KeyRows } from './Style/style.js';
import { BoardContext } from './App.jsx';

function Keyboard() {
  const { currentGuess, greyOut, handleEnter, handleDelete, handleLetterSelect, } = useContext(BoardContext);
  const topKey = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const middleKey = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const bottomKey = ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Delete']

  const handleType = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        handleEnter();
      } else if (event.key === 'Backspace') {
        handleDelete();
      } else {
        [topKey, middleKey, bottomKey].map((keyRow) => {
          keyRow.forEach((key) => {
            if (event.key.toUpperCase() === key.toUpperCase()) {
              handleLetterSelect(key)
            }
          })
        })
      }
    }, [currentGuess]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleType);

    return () => {
      document.removeEventListener("keydown", handleType);
    };
  }, [handleType])


  return (
    <Keys onKeyDown={handleType}>
      <KeyRows>
        {topKey.map((letter) => (
          <EachKeyboardClick
          key={letter} letterKeyboard={letter}
          disableKey={greyOut.includes(letter)}
          />
        ))}
      </KeyRows>

      <KeyRows>
        {middleKey.map((letter) => (
          <EachKeyboardClick
          key={letter}
          letterKeyboard={letter}
          disableKey={greyOut.includes(letter)}
          />
        ))}
      </KeyRows>

      <KeyRows>
        {bottomKey.map((letter) => (
          <EachKeyboardClick
          key={letter}
          letterKeyboard={letter}
          disableKey={greyOut.includes(letter)}
          />
        ))}
      </KeyRows>
    </Keys>
  );
}

export default Keyboard;
