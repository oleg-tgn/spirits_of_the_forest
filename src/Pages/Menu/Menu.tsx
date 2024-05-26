import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className='page'>
      <nav className='navigation container'>
        <Link className='btn' to="/game">Start Game</Link>
        <Link className='btn' to="/profile">Profile</Link>
        <Link className='btn' to="/settings">Settings</Link>
        <Link className='btn' to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Menu;
