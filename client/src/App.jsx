import React, { useState, useEffect, createContext, useMemo } from 'react';
import axios from 'axios';
import Keyboard from './Keyboard.jsx';
import PlayBoard from './PlayBoard.jsx';
import Modal from './Modal.jsx';
import { GameWrapper, Header } from './Style/style.js'
export const BoardContext = createContext({});

function App() {
  const initalBoard = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ];
  const [board, setBoard] = useState(initalBoard);
  const [currentGuess, setCurrentGuess] = useState({position: 0, try: 0});
  const [targetWord, setTargetWord] = useState('');
  const [greyOut, setGreyOut] = useState([]);
  const [winner, setWinner] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (targetWord === '') {
      axios.get('/twordle')
      .then((data) => {
        setTargetWord(data.data)
      })
      .catch((err) => {
        console.log(err, 'Err in Client GET')
      })
    }
  }, [targetWord])

  const handleEnter = () => {
    if (currentGuess.position !== 5) return;
    setCurrentGuess({position: 0, try: currentGuess.try + 1})
    let wordUserTried = '';
    for (let i = 0; i < 5; i++) {
      wordUserTried += board[currentGuess.try][i];
    }

    if (wordUserTried === targetWord) {
      setModal(true);
      setWinner(true);
      return;
    }

    if (currentGuess.try >= 4) {
      setModal(true);
      return;
    }

  }

  const handleDelete = () => {
    if (currentGuess.position === 0) return;
    const newBoard = [...board];
    newBoard[currentGuess.try][currentGuess.position -1] = '';
    setBoard(newBoard);
    setCurrentGuess({...currentGuess, position: currentGuess.position- 1})
  }

  const handleLetterSelect = (letterKeyboard) => {
    if (currentGuess.position > 4) return;
    const newBoard = [...board];
    newBoard[currentGuess.try][currentGuess.position] = letterKeyboard;
    setBoard(newBoard);
    setCurrentGuess({...currentGuess, position: currentGuess.position+ 1})
  }

  const memoizedState = useMemo(
    () => ({
      board,
      setBoard,
      currentGuess,
      setCurrentGuess,
      targetWord,
      setTargetWord,
      handleEnter,
      handleDelete,
      handleLetterSelect,
      greyOut,
      setGreyOut,
      winner,
      setWinner,
      modal,
      setModal,
    }),
    [board, currentGuess, targetWord, greyOut, modal, winner]
  )

  return (
    <GameWrapper>
      <Header>Twordle</Header>
      <BoardContext.Provider value={memoizedState}>
        {modal ? <Modal/> : null}
        <PlayBoard/>
        <Keyboard/>
      </BoardContext.Provider>
    </GameWrapper>
  )
}

export default App;
