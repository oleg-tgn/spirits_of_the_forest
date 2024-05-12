// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './Menu/Menu.js';
import Game from './Game/Game.js';
import Profile from './Profile/Profile.js'; 
import Settings from './Settings/Settings.js'; 
import About from './About/About.js';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/game" element={<Game />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
  