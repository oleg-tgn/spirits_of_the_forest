import React from 'react';
import { Layer, RegularPolygon } from 'react-konva';

const hexagonHeight = window.innerHeight / 8;
const hexagonRadius = hexagonHeight / 2;
const sqrt3 = Math.sqrt(3); // Корень из 3 для упрощения расчетов

// Функция для преобразования координат гексагона в координаты экрана
const hexToScreen = (q, r) => {
  const x = hexagonRadius * (sqrt3 * q + sqrt3 / 2 * r);
  const y = hexagonRadius * 3 / 2 * r;
  return { x, y };
};

const Board = ({ hexagonsData, centerX, centerY }) => {
  const hexagonSize = hexagonRadius; // Половина высоты гексагона

  const hexagons = hexagonsData.map((hexData, index) => {
    const { x, y } = hexToScreen(hexData.coord.x, hexData.coord.z);
    return {
      ...hexData,
      x: centerX + x,
      y: centerY + y,
      color: hexData.color,
    };
  });

  return (
    <Layer>
      {hexagons.map((hexagon, index) => (
        <RegularPolygon
          key={index}
          x={hexagon.x}
          y={hexagon.y}
          sides={6}
          radius={hexagonSize}
          fill={hexagon.color}
          stroke="black"
          strokeWidth={4}
          // Добавьте сюда обработчики событий, если необходимо
        />
      ))}
    </Layer>
  );
};

export default Board;
