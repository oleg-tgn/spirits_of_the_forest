// import React, { useState, useEffect } from 'react';
// import { Stage } from 'react-konva';
// import Board from './Board';
// import { richnessColor } from './constants';
// import WebSocketComponent from './WebSocketComponent';

// const Game = () => {
//   const [hexagons, setHexagons] = useState([]);
//   const centerX = window.innerWidth / 2;
//   const centerY = window.innerHeight / 2;

//   // Callback function to update hexagons based on WebSocket data
//   const handleNewData = (data) => {
//     try {
//       const gameState = JSON.parse(data);
//       console.log("parsedData: ", gameState);
//       const hexagonsData = gameState.Board.Cells;
//       const newHexagons = hexagonsData.map(hexData => ({
//         ...hexData,
//         color: richnessColor[hexData.richness],
//       }));
//       setHexagons(newHexagons);
//     } catch (e) {
//       console.error('Error parsing data', e);
//     }
//   };

//   return (
//     <Stage width={window.innerWidth} height={window.innerHeight}>
//       <Board hexagonsData={hexagons} centerX={centerX} centerY={centerY} />
//       <WebSocketComponent onMessageReceived={handleNewData} />
//     </Stage>
//   );
// };

// export default Game;

import React, { useState, useEffect, useCallback } from 'react';  // Import useCallback
import { Stage } from 'react-konva';
import Board from './Board';
import { richnessColor } from './constants';
import WebSocketComponent from './WebSocketComponent';

const Game = () => {
  const [hexagons, setHexagons] = useState([]);
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // Use useCallback to memoize this function
  const handleNewData = useCallback((data) => {
    try {
      const gameState = JSON.parse(data);
      console.log("parsedData: ", gameState);
      const hexagonsData = gameState.Board.Cells;
      const newHexagons = hexagonsData.map(hexData => ({
        ...hexData,
        color: richnessColor[hexData.Richness],
      }));
      setHexagons(newHexagons);
    } catch (e) {
      console.error('Error parsing data', e);
    }
  }, []);  // Empty dependency array means this function is created once per component instance

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Board hexagonsData={hexagons} centerX={centerX} centerY={centerY} />
      <WebSocketComponent onMessageReceived={handleNewData} />
    </Stage>
  );
};

export default Game;