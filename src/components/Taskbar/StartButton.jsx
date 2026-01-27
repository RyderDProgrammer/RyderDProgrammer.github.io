import styles from './StartButton.module.css';

export function StartButton() {
  const handleClick = () => {
    // Future: Open start menu
    console.log('Start button clicked');
  };

  return (
    <button className={styles.startButton} onClick={handleClick}>
      <span className={styles.startIcon}>🪟</span>
      <span className={styles.startText}>Menu</span>
    </button>
  );
}
