import { useClock } from '../../hooks/useClock';
import styles from './Clock.module.css';

export function Clock() {
  const { timeString, dateString } = useClock();

  return (
    <div className={styles.taskbarClock}>
      <div className={styles.clockTime}>
        {timeString} {dateString}
      </div>
    </div>
  );
}
