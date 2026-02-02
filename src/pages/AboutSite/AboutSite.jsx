import { Link } from 'react-router-dom';
import styles from './AboutSite.module.css';

export function AboutSite() {
  return (
    <div className={styles.aboutSite}>
      <h2>About the Site</h2>
      <div className={styles.content}>
        <p>
          This personal portfolio site is built with modern web technologies to
          showcase my work and share information about my development journey.
        </p>

        <h3>Technologies Used</h3>
        <ul>
          <li>React 18.3.1</li>
          <li>React Router for navigation</li>
          <li>Vite for fast development and building</li>
          <li>CSS Modules for component styling</li>
        </ul>

        <h3>Features</h3>
        <ul>
          <li>Light/Dark theme toggle</li>
          <li>Windows XP-inspired taskbar design</li>
          <li>Responsive layout</li>
          <li>Client-side routing</li>
        </ul>

        <p>
          The site is hosted on GitHub Pages and continuously updated with new
          projects and content.
        </p>
      </div>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}
