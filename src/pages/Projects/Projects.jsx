import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <div className={styles.projects}>
      <h2>My Projects</h2>
      <p>Project portfolio coming soon...</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}
