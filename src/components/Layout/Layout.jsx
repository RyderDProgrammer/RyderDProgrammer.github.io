import { Header } from '../Header/Header';
import { Taskbar } from '../Taskbar/Taskbar';
import { WindowContainer } from '../Window/WindowContainer';
import { Home } from '../../pages/Home/Home';
import { useWindows } from '../../contexts/WindowContext';
import styles from './Layout.module.css';

export function Layout() {
  const { windows } = useWindows();

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {windows.length === 0 ? <Home /> : <WindowContainer />}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2026 Ryder DeBack</p>
      </footer>
      <Taskbar />
    </div>
  );
}
