import { StartButton } from './StartButton';
import { Clock } from './Clock';
import styles from './Taskbar.module.css';

export function Taskbar() {
  return (
    <div className={styles.taskbar}>
      <StartButton />
      <Clock />
    </div>
  );
}
