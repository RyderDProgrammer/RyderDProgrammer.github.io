export const PROJECTS = [
  {
    id: 'portfolio-site',
    title: 'Portfolio Site',
    githubUrl: 'https://github.com/RyderDProgrammer/RyderDProgrammer.github.io',
    bullets: [
      'Personal portfolio built with React, Vite, and CSS Modules',
      'Features a Windows XP-inspired desktop UI with a windowing system and taskbar',
      'Supports light/dark mode and is deployed via GitHub Pages',
    ],
    description: '',
    images: [],
  },
  {
    id: 'treasure-hunter',
    title: 'Treasure Hunter (AI Search)',
    githubUrl: 'https://github.com/RyderDProgrammer/TCSS435-TreasureHunter',
    bullets: [
      'Python project implementing search algorithms to solve a grid-based treasure hunt environment',
      'Covers multiple AI search strategies with modular algorithm and core components',
    ],
    description: '',
    images: [],
  },
  {
    id: 'movie-api',
    title: 'Movie Web API',
    githubUrl: 'https://github.com/RyderDProgrammer/TCSS460-MovieWebAPI',
    bullets: [
      'RESTful API built with Node.js, Express, TypeScript, and PostgreSQL for managing movie data',
      'Supports filtering and CRUD operations across actors, directors, and genres',
      'Optimized bulk database import from 13 hours down to under 3 minutes',
    ],
    description: '',
    images: [],
  },
  {
    id: 'movie-frontend',
    title: 'Movie Web App (Front End)',
    githubUrl: 'https://github.com/RyderDProgrammer/TCSS460-Group4-FrontEnd',
    bullets: [
      'Next.js/TypeScript front end integrating Movie, TV, and Credentialing APIs',
      'Includes user authentication, search, watchlists, and full CRUD for movies and shows',
      'Deployed on Vercel with progressive feature rollout across multiple sprints',
    ],
    description: '',
    images: [],
  },
  {
    id: 'grooming-salon',
    title: 'Grooming Salon Website',
    githubUrl: 'https://github.com/rothlisbergerc/GroomingSalonWebsite',
    bullets: [
      'ASP.NET Core MVC app with SQL Server for a grooming salon business',
      'Handles appointment scheduling, pet/owner profiles, and service browsing',
      'Co-authored with Cheryl Rothlisberger; responsive design for mobile and desktop',
    ],
    description: '',
    images: [],
  },
];

export function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id);
}
