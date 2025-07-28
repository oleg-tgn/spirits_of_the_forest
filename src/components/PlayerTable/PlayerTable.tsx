import { Player } from "types/Player";
import styles from './PlayerTable.module.css';

type Props = {
  player: Player;
  isActive: boolean;
}

export const PlayerTable = ({ player, isActive }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.state}>
        <div className={styles.key}>Player:</div> <div className={styles.value}>
          {player.Number + 1}
          {isActive && <span>&nbsp;(Active)</span>}
        </div>
      </div>
      <div className={styles.state}>
        <div className={styles.key}>Waiting:</div> <div className={styles.value}>{player.IsWaiting ? 'YES' : 'NO'}</div>
      </div>
      <div className={styles.state}>
        <div className={styles.key}>Place:</div> <div className={styles.value}>{player.Place}</div>
      </div>
      <div className={styles.state}>
        <div className={styles.key}>Score:</div> <div className={styles.value}>{player.Score}</div>
      </div>
      <div className={styles.state}>
        <div className={styles.key}>Sun Points:</div> <div className={styles.value}>{player.SunPoints}</div>
      </div>
    </div>
  )
};
