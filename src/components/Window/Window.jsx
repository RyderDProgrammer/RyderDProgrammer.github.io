import { useWindows } from '../../contexts/WindowContext';
import { Home } from '../../pages/Home/Home';
import { About } from '../../pages/About/About';
import { AboutSite } from '../../pages/AboutSite/AboutSite';
import { Projects } from '../../pages/Projects/Projects';
import styles from './Window.module.css';

// Map routes to components
const ROUTE_COMPONENTS = {
  '/': Home,
  '/about': About,
  '/about-site': AboutSite,
  '/projects': Projects,
};

export function Window({ id, route, title, zIndex, isActive }) {
  const { closeWindow, activateWindow } = useWindows();

  const handleClose = (e) => {
    e.stopPropagation();
    closeWindow(id);
  };

  const handleWindowClick = () => {
    if (!isActive) {
      activateWindow(id);
    }
  };

  const Component = ROUTE_COMPONENTS[route] || Home;

  return (
    <div
      className={`${styles.window} ${isActive ? styles.active : ''}`}
      style={{ zIndex }}
      onClick={handleWindowClick}
    >
      <button
        className={styles.closeButton}
        onClick={handleClose}
        aria-label="Close current tab"
        title="Close current tab"
      >
        ✕
      </button>
      <div className={styles.content}>
        <Component />
      </div>
    </div>
  );
}
