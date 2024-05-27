import { GameTable } from 'components/GameTable';
import { Stage } from 'react-konva';
import { Board } from 'components/Board';
import { useWebSocket } from 'hooks/useWebSocket';

const Game = () => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2 - 50;

  const { gameState } = useWebSocket();

  if (!gameState) return (
    <p style={{textAlign: 'center'}}>Game loading...</p>
  );

  console.log(gameState);

  return (
    <>
      <GameTable
        nutrients={gameState.Nutrients}
        round={gameState.Round}
        sunDirection={gameState.SunDirection}
      />
      <Stage width={window.innerWidth} height={window.innerHeight - 100}>
        <Board hexagonsData={gameState.Board.Cells} centerX={centerX} centerY={centerY} gameState={gameState}/>
      </Stage>
    </>
  );
};

export { Game };
