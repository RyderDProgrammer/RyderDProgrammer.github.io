import { useState } from 'react';
import { StartButton } from './StartButton';
import { StartMenu } from './StartMenu';
import { TaskbarTabs } from './TaskbarTabs';
import { Clock } from './Clock';
import { useTheme } from '../../hooks/useTheme';
import styles from './Taskbar.module.css';

export function Taskbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <StartMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <div className={styles.taskbar}>
        <StartButton onClick={toggleMenu} isActive={isMenuOpen} />
        <TaskbarTabs />
        <div className={styles.rightSection}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <Clock />
        </div>
      </div>
    </>
  );
}
