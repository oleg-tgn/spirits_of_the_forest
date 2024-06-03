import { GameTable } from 'components/GameTable';
import { PlayerTable } from 'components/PlayerTable';

import { Stage } from 'react-konva';
import { Board } from 'components/Board';
import { useWebSocket } from 'hooks/useWebSocket';

import styles from './Game.module.css'

import { ActionType } from 'types/ActionType';

const Game = () => {
  const centerX = (window.innerWidth - 400) / 2;
  const centerY = window.innerHeight / 2 - 50;

  const { gameState, sendMessage } = useWebSocket();

  if (!gameState) return (
    <p style={{textAlign: 'center'}}>Game loading...</p>
  );

  const handleWaitClick = () => {
    sendMessage({
      "SourceCellIdx": 0,
      "TargetCellIdx": 0,
      "Type": ActionType.WAIT,
      "GameId": gameState.Id,
    });
  }

  return (
    <div className={styles.root}>
      <GameTable
        nutrients={gameState.Nutrients}
        round={gameState.Round}
        sunDirection={gameState.SunDirection}
      />
      <div className={styles.gameRow}>
        <PlayerTable
          player={gameState.Players[0]}
          isActive={gameState.ActivePlayerId === gameState.Players[0].Id}
        />
        <button onClick={handleWaitClick}>Wait</button>
        <div className={styles.boardContainer}>
          <Stage
            width={window.innerWidth - 400}
            height={window.innerHeight - 100}>
            <Board
              hexagonsData={gameState.Board.Cells}
              centerX={centerX}
              centerY={centerY}
              gameState={gameState}
            />
          </Stage>
        </div>

        <PlayerTable
          player={gameState.Players[1]}
          isActive={gameState.ActivePlayerId === gameState.Players[1].Id}
        />
      </div>
    </div>
  );
};

export { Game };
