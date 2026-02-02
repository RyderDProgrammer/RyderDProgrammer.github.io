import { Header } from '../Header/Header';
import { Taskbar } from '../Taskbar/Taskbar';
import { WindowContainer } from '../Window/WindowContainer';
import styles from './Layout.module.css';

export function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <WindowContainer />
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2026 Ryder DeBack</p>
      </footer>
      <Taskbar />
    </div>
  );
}
