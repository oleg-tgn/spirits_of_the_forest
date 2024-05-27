import { Route, Routes } from 'react-router-dom';
// import { Menu } from 'pages/Menu';
// import { Game } from 'pages/Game';
// import { Profile } from 'pages/Profile';
// import { Settings } from 'pages/Settings';
// import { About } from 'pages/About';

import { Menu } from '../../pages/Menu';
import { Game } from '../../pages/Game';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
       <Route path="/game" element={<Game />} />
      {/*<Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}

export { App };
