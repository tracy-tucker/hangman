import React from 'react';
import Hangman from './Hangman';
import AlphaBox from './AlphaBox';
import Phrase from './Phrase';

const Gameboard = () => {
  return (
    <div>
      <div className="align-element flex flex-col sm:flex-row justify-between items-center">
        <Hangman />
        <AlphaBox />
      </div>
      <div>
        <Phrase />
      </div>
    </div>
  );
};

export default Gameboard;

// This component will be the PARENT for:
// Hangman
// Phrase
