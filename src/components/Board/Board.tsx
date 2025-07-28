import React from 'react';
import { Layer, RegularPolygon } from 'react-konva';
import { Tree } from 'components/Tree';
import { richnessColor } from 'constants/richnessColor';
import type { Game } from 'types/Game';
import type { Cell } from 'types/Cell';

const hexagonHeight = window.innerHeight / 8;
const hexagonRadius = hexagonHeight / 2;
const sqrt3 = Math.sqrt(3);

// Функция для преобразования координат гексагона в координаты экрана
const hexToScreen = (q: number, r: number) => {
  const x = hexagonRadius * (sqrt3 * q + sqrt3 / 2 * r);
  const y = hexagonRadius * 3 / 2 * r;
  return { x, y };
};

enum PlayerColor {
  ORANGE = 1,
  GREEN = 2,
};

type Props = {
  hexagonsData: Cell[];
  centerX: number;
  centerY: number;
  gameState: Game;
  onTreeClick: (index: number) => void;
}

const Board = ({ hexagonsData, centerX, centerY, gameState, onTreeClick }: Props) => {
  if (!hexagonsData) return;

  const hexagonSize = window.innerHeight / 16;

  const getTreeColor = (gameState: Game, hexData: Cell) => {
    return gameState.Players[0].Id === hexData.Plant?.OwnedBy ? PlayerColor.GREEN : PlayerColor.ORANGE;
  }

  const handleHexClick = (id: number, PlantId?: string) => {
    if (!PlantId) return;
    onTreeClick(id);
  };

  return (
    <Layer>
      {hexagonsData.map((hexData, index) => {
        const { x, y } = hexToScreen(hexData.CubeCoord.X, hexData.CubeCoord.Z);
        const posX = centerX + x;
        const posY = centerY + y;
        let treeSize = 0;
        if (hexData.Plant) {
          treeSize = hexagonHeight * 0.33 * hexData.Plant?.PlantLevel;
        }
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
              onClick={() => handleHexClick(hexData.Index, hexData.Plant?.Id)}
            />
            {hexData.Plant &&
              <Tree
                color={getTreeColor(gameState, hexData)}
                x={posX - treeSize / 2}
                y={posY - treeSize / 2}
                size={treeSize}
              />
            }

          </React.Fragment>
        );
      })}
    </Layer>
  );
};

export { Board };
