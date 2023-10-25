import React from 'react';

const Hero = () => {
  return (
    <div className="align-element flex flex-col items-center">
      <h1 className="text-4xl sm:text-6xl font-bold tracking-widest text-green-300">
        Hangman
      </h1>
      <h3 className="font-thin text-md sm:text-xl tracking-wider sm:tracking-widest">
        Put your noggin to the test!
      </h3>
    </div>
  );
};

export default Hero;
