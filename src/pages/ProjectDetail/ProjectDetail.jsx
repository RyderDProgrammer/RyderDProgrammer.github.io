import { getProjectById } from '../../data/projects';
import styles from './ProjectDetail.module.css';

export function ProjectDetail({ projectId }) {
  const project = getProjectById(projectId);

  if (!project) {
    return <div className={styles.detail}><p>Project not found.</p></div>;
  }

  return (
    <div className={styles.detail}>
      <h2>{project.title}</h2>

      {project.description && <p className={styles.description}>{project.description}</p>}

      {project.bullets.length > 0 && (
        <ul className={styles.bullets}>
          {project.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}

      {project.images.length > 0 && (
        <div className={styles.images}>
          {project.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              className={styles.image}
            />
          ))}
        </div>
      )}

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.githubLink}
        >
          View on GitHub
        </a>
      )}
    </div>
  );
}
