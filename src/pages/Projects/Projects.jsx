import styles from './Projects.module.css';

const PROJECTS = [
  {
    title: 'Portfolio Site',
    url: 'https://github.com/RyderDProgrammer/RyderDProgrammer.github.io',
    bullets: [
      'Personal portfolio built with React, Vite, and CSS Modules',
      'Features a Windows XP-inspired desktop UI with a windowing system and taskbar',
      'Supports light/dark mode and is deployed via GitHub Pages',
    ],
  },
  {
    title: 'Treasure Hunter (AI Search)',
    url: 'https://github.com/RyderDProgrammer/TCSS435-TreasureHunter',
    bullets: [
      'Python project implementing search algorithms to solve a grid-based treasure hunt environment',
      'Covers multiple AI search strategies with modular algorithm and core components',
    ],
  },
  {
    title: 'Movie Web API',
    url: 'https://github.com/RyderDProgrammer/TCSS460-MovieWebAPI',
    bullets: [
      'RESTful API built with Node.js, Express, TypeScript, and PostgreSQL for managing movie data',
      'Supports filtering and CRUD operations across actors, directors, and genres',
      'Optimized bulk database import from 13 hours down to under 3 minutes',
    ],
  },
  {
    title: 'Movie Web App (Front End)',
    url: 'https://github.com/RyderDProgrammer/TCSS460-Group4-FrontEnd',
    bullets: [
      'Next.js/TypeScript front end integrating Movie, TV, and Credentialing APIs',
      'Includes user authentication, search, watchlists, and full CRUD for movies and shows',
      'Deployed on Vercel with progressive feature rollout across multiple sprints',
    ],
  },
  {
    title: 'Grooming Salon Website',
    url: 'https://github.com/rothlisbergerc/GroomingSalonWebsite',
    bullets: [
      'ASP.NET Core MVC app with SQL Server for a grooming salon business',
      'Handles appointment scheduling, pet/owner profiles, and service browsing',
      'Co-authored with Cheryl Rothlisberger; responsive design for mobile and desktop',
    ],
  },
];

export function Projects() {
  return (
    <div className={styles.projects}>
      <h2>My Projects</h2>
      <p className={styles.comingSoon}>Image/Video demonstration of each project coming soon!</p>
      <div className={styles.list}>
        {PROJECTS.map((project) => (
          <div key={project.url} className={styles.card}>
            <h3>
              <a href={project.url} target="_blank" rel="noreferrer">
                {project.title}
              </a>
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
