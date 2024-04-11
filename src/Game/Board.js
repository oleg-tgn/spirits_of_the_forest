import React from 'react';
import { Layer, RegularPolygon } from 'react-konva';
import Tree from './Tree';

const hexagonHeight = window.innerHeight / 8;
const hexagonRadius = hexagonHeight / 2;
const sqrt3 = Math.sqrt(3); 

// Функция для преобразования координат гексагона в координаты экрана
const hexToScreen = (q, r) => {
  const x = hexagonRadius * (sqrt3 * q + sqrt3 / 2 * r);
  const y = hexagonRadius * 3 / 2 * r;
  return { x, y };
};

const Board = ({ hexagonsData, centerX, centerY }) => {
    const hexagonSize = window.innerHeight / 16;

    return (
        <Layer>
            {hexagonsData.map((hexData, index) => {
                const { x, y } = hexToScreen(hexData.coord.x, hexData.coord.z);
                const posX = centerX + x;
                const posY = centerY + y;

                return (
                    <React.Fragment key={index}>
                        <RegularPolygon
                            x={posX}
                            y={posY}
                            sides={6}
                            radius={hexagonSize}
                            fill={hexData.color}
                            stroke="black"
                            strokeWidth={4}
                        />
                        <Tree
                            tree={hexData.tree}
                            x={posX}
                            y={posY}
                            hexagonHeight={hexagonHeight}
                        />
                    </React.Fragment>
                );
            })}
        </Layer>
    );
};

export default Board;
