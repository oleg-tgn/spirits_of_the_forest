import React from 'react';
import { Layer, RegularPolygon } from 'react-konva';
import Tree from './Tree';
import { richnessColor } from './constants';
import type { Game } from '../types/Game';
import type { Cell } from '../types/Cell';

const hexagonHeight = window.innerHeight / 8;
const hexagonRadius = hexagonHeight / 2;
const sqrt3 = Math.sqrt(3); 

// Функция для преобразования координат гексагона в координаты экрана
const hexToScreen = (q: number, r: number) => {
  const x = hexagonRadius * (sqrt3 * q + sqrt3 / 2 * r);
  const y = hexagonRadius * 3 / 2 * r;
  return { x, y };
};

type Props = {
    hexagonsData: Cell[];
    centerX: number;
    centerY: number;
    gameState: Game;
}

const Board = ({ hexagonsData, centerX, centerY, gameState }: Props) => {
    if (!hexagonsData) return;

    const hexagonSize = window.innerHeight / 16;

    return (
        <Layer>
            {hexagonsData.map((hexData, index) => {
                const { x, y } = hexToScreen(hexData.CubeCoord.X, hexData.CubeCoord.Z);
                const posX = centerX + x;
                const posY = centerY + y;

                return (
                    <React.Fragment key={index}>
                        <RegularPolygon
                            x={posX}
                            y={posY}
                            sides={6}
                            radius={hexagonSize}
                            fill={richnessColor[hexData.Richness]}
                            stroke="black"
                            strokeWidth={4}
                        />
                        {hexData.Plant &&
                            <Tree
                                tree={hexData.Plant}
                                x={posX}
                                y={posY}
                                hexagonHeight={hexagonHeight}
                                players={gameState.Players}
                            />                            
                        }
                    </React.Fragment>
                );
            })}
        </Layer>
    );
};

export default Board;
