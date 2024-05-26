import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Game developers</p>
      <ul>
        <li>Dmitriy (Back-end development)</li>
        <li>Oleg (Frontend development)</li>
        <li>Andrey (Design)</li>
        <li>Evgenia (2d-art)</li>
      </ul>
      <button><Link to="/">Back</Link></button>
    </div>
  );
};

export default About;