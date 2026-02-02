import { useWindows } from '../../contexts/WindowContext';
import { Window } from './Window';
import styles from './WindowContainer.module.css';

export function WindowContainer() {
  const { windows, activeWindowId } = useWindows();

  return (
    <div className={styles.container}>
      {windows.map(window => (
        <Window
          key={window.id}
          id={window.id}
          route={window.route}
          title={window.title}
          zIndex={window.zIndex}
          isActive={window.id === activeWindowId}
        />
      ))}
    </div>
  );
}
