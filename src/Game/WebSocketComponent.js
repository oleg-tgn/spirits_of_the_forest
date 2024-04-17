import React, { useEffect, useState } from 'react';

function WebSocketComponent({ onMessageReceived }) {
    const [websocket, setWebsocket] = useState(null);

    useEffect(() => {
        const ws = new WebSocket('wss://spiritsoftheforest20240414143518.azurewebsites.net/ws?userId=admin');

        ws.onopen = () => {
            console.log('Connected to the WebSocket server');
        };

        ws.onmessage = (event) => {
            onMessageReceived(event.data);  // Call the passed callback function with new data
        };

        ws.onclose = () => {
            console.log('Disconnected from the WebSocket server');
        };

        ws.onerror = (error) => {
            console.error('WebSocket error: ', error);
        };

        setWebsocket(ws);

        return () => {
            ws.close();
        };
    }, [onMessageReceived]);  // Include the callback in the dependency array

    return null;  // This component does not render anything
}

export default WebSocketComponent;