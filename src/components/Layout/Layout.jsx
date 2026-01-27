import { Header } from '../Header/Header';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { Taskbar } from '../Taskbar/Taskbar';
import styles from './Layout.module.css';

export function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <ThemeToggle />
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2026 Ryder DeBack</p>
      </footer>
      <Taskbar />
    </div>
  );
}
