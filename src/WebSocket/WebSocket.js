// About.js
import React from 'react';
import { Link } from 'react-router-dom';
import WebSocketComponent from '../Game/WebSocketComponent';


const WebSocket = () => {
  return (
    <div>
      <h1>WebSocket</h1>
      <p>Game developers</p>
      <div>
            <h1>WebSocket Demo</h1>
            <WebSocketComponent />
        </div>
      <button><Link to="/">Back</Link></button>
    </div>
  );
};

export default WebSocket;