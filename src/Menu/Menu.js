// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <nav>
        <ul>
          <li><Link to="/game">Game</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/websocket">WebSocket</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;