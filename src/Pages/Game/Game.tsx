import { Stage } from 'react-konva';
import { Board } from 'components/Board';
import { useWebSocket } from 'hooks/useWebSocket';

const Game = () => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const { gameState } = useWebSocket();

  if (!gameState) return (
    <p style={{textAlign: 'center'}}>Game loading...</p>
  );

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Board hexagonsData={gameState.Board.Cells} centerX={centerX} centerY={centerY} gameState={gameState}/>
    </Stage>
  );
};

export { Game };
