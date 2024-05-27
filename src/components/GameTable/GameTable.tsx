import styles from './GameTable.module.css';

type Props = {
  nutrients: number;
  round: number;
  sunDirection: number;
}

const GameTable = (props: Props) => {
  const { nutrients, round, sunDirection } = props;

  return (
    <div className={styles.root}>
      <div className={styles.state}>
        <div className={styles.key}>Nutrients:</div> <div className={styles.value}>{nutrients}</div>
      </div>
      <div className={styles.state}>
        <div className={styles.key}>Round:</div> <div className={styles.value}>{round}</div>
      </div>
      <div className={styles.state}>
        <div className={styles.key}>Sun Direction:</div> <div className={styles.value}>{sunDirection}</div>
      </div>
    </div>
  )
};

export { GameTable };
