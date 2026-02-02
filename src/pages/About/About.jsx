import { Link } from 'react-router-dom';
import styles from './About.module.css';

export function About() {
  return (
    <div className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.content}>
        <p>
          Hello! I'm Ryder DeBack, a passionate developer with a keen interest in
          creating engaging web experiences.
        </p>
        <p>
          I specialize in modern web technologies and enjoy building interactive
          applications that combine functionality with great user experience.
        </p>
        <p>
          When I'm not coding, I enjoy exploring new technologies and contributing
          to the developer community.
        </p>
      </div>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}
