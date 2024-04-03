import React, { useState, useEffect } from 'react';
import { Stage, Layer, RegularPolygon, Text } from 'react-konva';
import hexagonsData from './hexagonsData';

// Вычисляем высоту гексагона как 1/8 от высоты окна браузера
const hexagonHeight = window.innerHeight / 8;
const hexagonRadius = hexagonHeight / 2;
const sqrt3 = Math.sqrt(3); // Корень из 3 для упрощения расчетов

// Функция для преобразования координат гексагона в координаты экрана
const hexToScreen = (q, r) => {
  const x = hexagonRadius * (sqrt3 * q + sqrt3 / 2 * r);
  const y = hexagonRadius * 3 / 2 * r;
  return { x, y };
};

const Game = () => {
  const [hexagons, setHexagons] = useState([]);
  const hexagonSize = hexagonRadius; // Половина высоты гексагона
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  useEffect(() => {
    const newHexagons = hexagonsData.map((hexData, index) => {
      const { x, y } = hexToScreen(hexData.coord.x, hexData.coord.z);
      return {
        ...hexData,
        x: centerX + x,
        y: centerY + y,
        color: `#89b717`, // Пример цвета, можете изменить на основе богатства
      };
    });
    setHexagons(newHexagons);
  }, []); // Пустой массив зависимостей означает, что эффект запустится один раз при монтировании

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
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
    </Stage>
  );
};

export default Game;
