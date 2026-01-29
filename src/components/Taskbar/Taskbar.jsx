import { useState } from 'react';
import { StartButton } from './StartButton';
import { StartMenu } from './StartMenu';
import { Clock } from './Clock';
import styles from './Taskbar.module.css';

export function Taskbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <Clock />
      </div>
    </>
  );
}
