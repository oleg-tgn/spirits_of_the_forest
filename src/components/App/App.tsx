import { Route, Routes } from 'react-router-dom';
import { Menu } from 'qwe/Menu';
import { Game } from 'qwe/Game';
import { Profile } from 'qwe/Profile';
import { Settings } from 'qwe/Settings';
import { About } from 'qwe/About';

import { Test } from 'components/Test';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
       <Route path="/game" element={<Game />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/about" element={<About />} />
      <Test />
    </Routes>
  );
}

export { App };
