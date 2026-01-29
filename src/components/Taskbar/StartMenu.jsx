import { useEffect, useRef } from 'react';
import styles from './StartMenu.module.css';

export function StartMenu({ isOpen, onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      // Don't close if clicking the start button (it handles toggle itself)
      const startButton = event.target.closest('button');
      if (startButton && startButton.textContent.includes('Menu')) {
        return;
      }

      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Small delay to prevent immediate closing when opening
    setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={menuRef} className={styles.startMenu}>
      <div className={styles.menuContent}>
        <button className={styles.menuItem}>
          <span className={styles.menuIcon}>📄</span>
          <span className={styles.menuLabel}>About Me</span>
        </button>
        <button className={styles.menuItem}>
          <span className={styles.menuIcon}>📄</span>
          <span className={styles.menuLabel}>About the site</span>
        </button>
        <button className={styles.menuItem}>
          <span className={styles.menuIcon}>📁</span>
          <span className={styles.menuLabel}>Projects</span>
        </button>
      </div>
    </div>
  );
}
