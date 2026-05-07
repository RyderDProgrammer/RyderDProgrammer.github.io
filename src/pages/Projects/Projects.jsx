import { useWindows } from '../../contexts/WindowContext';
import { PROJECTS } from '../../data/projects';
import styles from './Projects.module.css';

export function Projects() {
  const { openWindow } = useWindows();

  return (
    <div className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.list}>
        {PROJECTS.map((project) => (
          <div key={project.id} className={styles.card}>
            <h3>
              <button
                className={styles.projectButton}
                onClick={() => openWindow(`/project/${project.id}`, project.title)}
              >
                {project.title}
              </button>
            </h3>
            <ul>
              {project.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
