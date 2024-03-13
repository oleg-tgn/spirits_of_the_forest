// Game.js
import React from 'react';
import { Link } from 'react-router-dom';

const Game = () => {
  return (
    <div>
      <h1>Game Page</h1>
      <button><Link to="/">Exit</Link></button>
    </div>
  );
};

export default Game;