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
    description: 'This site is my personal portfolio, built with React, Vite, and CSS Modules. The core idea was to move away from the typical scrolling-page format and instead present everything through a Windows XP-inspired desktop interface, complete with a windowing system, taskbar, and openable tabs for each section. It supports both light and dark mode and is deployed via GitHub Pages. The goal was to make the portfolio itself a demonstration of what I can build, rather than just a list of things I\'ve done.',
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
    id: 'file-watcher',
    title: 'File Watcher Project',
    githubUrl: 'https://github.com/RyderDProgrammer/TCSS360-FileWatcher',
    bullets: [
      'Java desktop application that monitors a selected directory for file system events in real time',
      'Stores all events in a SQLite database with timestamps for historical lookup',
      'Sends email notifications with optional file attachments for remote monitoring',
    ],
    description: 'The File Watcher is a Java desktop application built to automate file system surveillance on Windows. A user selects a directory to monitor, and the application continuously watches it and all subdirectories for any changes to files, recording each event with its name, path, type, and timestamp. All events are optionally persisted to a local SQLite database, which can then be queried through a built-in filter interface supporting searches by file name, extension, path, event type, and date range. Results can be exported to CSV or emailed directly from the application. The tool was designed to replace manual folder inspection for scenarios like audit logging, file activity auditing, or lightweight change detection, and was packaged as a runnable Windows executable for end-user deployment.',
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
