import { useEffect, useState } from 'react';
import { Action } from 'types/Action';
import type { Game } from 'types/Game';

function useWebSocket() {
  const [gameState, setGameState] = useState<Game | null>(null);
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    //"050865c5-b246-4fdb-8222-08dc83fbde6b"
    const websocket = new WebSocket('wss://spiritsoftheforest20240414143518.azurewebsites.net/ws?userId=admin');

    websocket.onopen = () => {
      console.log('Connected to the WebSocket server');
      setWs(websocket);
    };

    websocket.onmessage = (event) => {
      setGameState(JSON.parse(event.data));
    };

    websocket.onclose = () => {
      console.log('Disconnected from the WebSocket server');
      setWs(null);
    };

    websocket.onerror = (error) => {
      console.error('WebSocket error: ', error);
    };

    return () => {
      websocket.close();
    };
  }, []);

  const sendMessage = (message: Action) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(message));
    } else {
      console.error('WebSocket is not connected');
    }
  };

  return { gameState, sendMessage };
}

export { useWebSocket };
