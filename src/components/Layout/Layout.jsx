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
        <p>&copy; 2026 Ryder DeBack 
        |  <a href="https://www.linkedin.com/in/ryder-deback/" target="_blank" rel="noreferrer" style={{ marginLeft: '6px' , marginRight: '6px'}}>LinkedIn</a>
        |  <a href="https://github.com/RyderDProgrammer" target="_blank" rel="noreferrer" style={{ marginLeft: '6px' }}>GitHub</a>
        </p>
      </footer>
      <Taskbar />
    </div>
  );
}
