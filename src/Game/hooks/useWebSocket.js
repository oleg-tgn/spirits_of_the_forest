import { useEffect, useState } from 'react';


function useWebSocket() {
    const [gameState, setGameState] = useState({});

    useEffect(() => {
        const ws = new WebSocket('wss://spiritsoftheforest20240414143518.azurewebsites.net/ws?userId=admin');

        ws.onopen = () => {
            console.log('Connected to the WebSocket server');
        };

        ws.onmessage = (event) => {
            setGameState(JSON.parse(event.data));
        };

        ws.onclose = () => {
            console.log('Disconnected from the WebSocket server');
        };

        ws.onerror = (error) => {
            console.error('WebSocket error: ', error);
        };

        return () => {
            ws.close();
        };
    }, []); 

    return { gameState };
}

export default useWebSocket;