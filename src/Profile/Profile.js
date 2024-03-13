// Profile.js
import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <ul>
        <li>Name: Oleg Stelmakh</li>
        <li>Games Count: 5</li>
        <li>Wins: 2</li>
        <li>Best result: 150:60</li>
      </ul>
      <button><Link to="/">Back</Link></button>
    </div>
  );
};

export default Profile;