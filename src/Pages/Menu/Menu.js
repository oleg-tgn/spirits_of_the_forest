// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className='page'>
      <nav>
        <ul>
          <li><Link to="/game">Start Game</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
