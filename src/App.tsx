import { Route, Routes } from 'react-router-dom';
import Menu from './Pages/Menu/Menu';
import Game from './Game/Game';
import Profile from './Pages/Profile/Profile'; 
import Settings from './Pages/Settings/Settings'; 
import About from './Pages/About/About';
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
  