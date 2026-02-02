import { useWindows } from '../../contexts/WindowContext';
import styles from './TaskbarTabs.module.css';

export function TaskbarTabs() {
  const { windows, activeWindowId, activateWindow } = useWindows();

  if (windows.length === 0) {
    return null;
  }

  return (
    <div className={styles.tabs}>
      {windows.map(window => (
        <button
          key={window.id}
          className={`${styles.tab} ${window.id === activeWindowId ? styles.active : ''}`}
          onClick={() => activateWindow(window.id)}
          title={window.title}
        >
          {window.title}
        </button>
      ))}
    </div>
  );
}
