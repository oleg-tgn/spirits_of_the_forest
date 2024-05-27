import { Route, Routes } from 'react-router-dom';
import { Home } from '@pages/Home';
import { Game } from '@pages/Game';
import { Profile } from '@pages/Profile';
import { Settings } from '@pages/Settings';
import { About } from '@pages/About';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export { App };
