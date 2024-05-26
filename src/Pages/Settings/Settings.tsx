import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <ul>
        <li>Player color:
          <select name="" id="">
            <option value="Green" selected>Green</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
          </select>
        </li>
        <li>Max points:
          <select name="" id="">
            <option value="50">50</option>
            <option value="40" selected>40</option>
            <option value="30">30</option>
          </select>
        </li>
        <li>Map size:
          <select name="" id="">
            <option value="5">5</option>
            <option value="4" selected>4</option>
            <option value="3">3</option>
          </select></li>
      </ul>
      <button><Link to="/">Back</Link></button>
    </div>
  );
};

export { Settings };
