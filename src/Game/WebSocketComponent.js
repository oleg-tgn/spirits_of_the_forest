import React, { useEffect, useState } from 'react';

function WebSocketComponent() {
    const [messages, setMessages] = useState([]);
    const [websocket, setWebsocket] = useState(null);
    const [waitingForMessage, setWaitingForMessage] = useState(false);  // Добавлено новое состояние для индикации ожидания

    useEffect(() => {
        // Создание объекта WebSocket
        const ws = new WebSocket('wss://spiritsoftheforest20240414143518.azurewebsites.net/ws?userId=admin');

        // Обработчик события при открытии соединения
        ws.onopen = () => {
            console.log('Connected to the WebSocket server');
            setWaitingForMessage(true);  // Включаем индикатор ожидания после установления соединения
        };

        // Обработчик события при получении сообщения
        ws.onmessage = (event) => {
            console.log('Message received: ', event.data);
            if (!event.data) {
                console.log('No data received');
                return;  // Пропускаем обновление состояния, если данных нет
            }
            setMessages(prevMessages => [...prevMessages, event.data]);
            setWaitingForMessage(false);
        };

        // Обработчик события при закрытии соединения
        ws.onclose = () => {
            console.log('Disconnected from the WebSocket server');
            if (waitingForMessage) {
                setWaitingForMessage(false);  // На всякий случай выключаем индикатор ожидания и при закрытии соединения
            }
        };

        // Обработчик ошибок
        ws.onerror = (error) => {
            console.error('WebSocket error: ', error);
            setWaitingForMessage(false);  // Выключаем индикатор ожидания также при ошибке соединения
        };

        // Запоминаем объект WebSocket в состоянии
        setWebsocket(ws);

        // Функция очистки при размонтировании компонента
        return () => {
            ws.close();
        };
    }, []);

    // Функция для отправки сообщения на сервер
    const sendMessage = (message) => {
        if (websocket) {
            websocket.send(message);
            console.log('Message sent: ', message);
        }
    };

    return (
        <div>
            <h2>WebSocket Messages</h2>
            {waitingForMessage ? <p>Waiting for message...</p> : messages.map((msg, index) => (
                <p key={index}>{msg}</p>
            ))}
            <button onClick={() => sendMessage('Hello from client!')}>Send Message</button>
        </div>
    );
}

export default WebSocketComponent;
