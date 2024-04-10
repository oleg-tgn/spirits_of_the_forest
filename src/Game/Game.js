import React, { useState, useEffect } from 'react';
import { Stage, Layer, RegularPolygon, Text } from 'react-konva';
import hexagonsData from './hexagonsData';
import Board from './Board';
import { richnessColor } from './constants';

const Game = () => {
  const [hexagons, setHexagons] = useState([]);
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  useEffect(() => {
    const newHexagons = hexagonsData.map(hexData => ({
      ...hexData,
      color: richnessColor[hexData.richness],
    }));
    setHexagons(newHexagons);
  }, []);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Board hexagonsData={hexagons} centerX={centerX} centerY={centerY} />
    </Stage>
  );
};

export default Game;