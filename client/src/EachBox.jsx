import React, { useState, useEffect, useContext } from 'react';
import { Box } from './Style/style.js';
import { BoardContext } from './App.jsx';

function EachBox ({position, rowIdx}) {
  const { board, currentGuess, targetWord, greyOut, setGreyOut } = useContext(BoardContext);
  const letter = board[rowIdx][position];

  const right = currentGuess.try > rowIdx && targetWord[position] === letter;
  const almost = currentGuess.try > rowIdx && !right && letter !== '' && targetWord.includes(letter);

  useEffect(() => {
    if (currentGuess.try >= rowIdx) {

      setGreyOut((letterNotInWord) => [...letterNotInWord, letter])
    }
  }, [currentGuess.try])

  return (
    <div>
      <Box right={right} almost={almost}>{letter}</Box>
    </div>
  )
}

export default EachBox;