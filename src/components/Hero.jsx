import React from 'react';
import cat from '../assets/cat.svg';

const Hero = () => {
  return (
    <div>
      <h1>Hangman</h1>
      <img src={cat} alt="charlie the cat" />
      <h2>Guess the Phrase</h2>
    </div>
  );
};

export default Hero;
