import React from 'react';
import cat from '../assets/cat.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="align-element flex flex-col justify-center items-center py-4 sm:flex-row sm:justify-between sm:items-center sm:gap-x-16">
        <div className="flex flex-col sm:flex-row items-center">
          <img src={cat} alt="Kitty the cat" />
          <h2 className="text-3xl font-bold">
            Kitty<span className="font-thin">Games</span>
          </h2>
        </div>
        <div className="py-3 sm:py-0">
          <a
            href="#"
            className="capitalize text-lg tracking-wide hover:btn-hover duration-300"
          >
            rules
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
