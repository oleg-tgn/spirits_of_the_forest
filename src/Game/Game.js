import React from 'react';
import { Stage } from 'react-konva';
import Board from './Board';
import { richnessColor } from './constants';
import useWebSocket from '../hooks/useWebSocket';

const Game = () => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const { gameState } = useWebSocket();

  if (!gameState?.Board) return;

  const hexagonsData = gameState.Board.Cells;
  const hexagons = hexagonsData.map(hexData => ({
    ...hexData,
    color: richnessColor[hexData.Richness],
  }));

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Board hexagonsData={hexagons} centerX={centerX} centerY={centerY} /> 
    </Stage>
  );
};

export default Game;
