import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export function Home() {
  return (
    <div className={styles.home}>
      <h2>Pages</h2>
      <ul className={styles.pageList}>
        <li>
          <Link to="/projects">My Projects</Link>
        </li>
      </ul>
    </div>
  );
}
