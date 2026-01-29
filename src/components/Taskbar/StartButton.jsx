import styles from './StartButton.module.css';

export function StartButton({ onClick, isActive }) {
  return (
    <button
      className={`${styles.startButton} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      <span className={styles.startIcon}>🪟</span>
      <span className={styles.startText}>Menu</span>
    </button>
  );
}
