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
    description: 'Developed a grid-based AI treasure hunting simulation as a group project for TCSS 435, focused on applying and comparing a range of classical search algorithms within an interactive, visualized environment. The application allows users to generate randomized grid maps with treasures, traps, and walls, then run uninformed search algorithms (BFS, DFS, UCS), informed heuristic search (A*, Greedy BFS), or adversarial game-tree search (MiniMax, Alpha-Beta pruning) to navigate agents toward their goals. The project also incorporated a probabilistic Bayesian belief system with configurable sensor noise, allowing agents to reason under uncertainty by updating treasure location probabilities using Bayes\'s rule as they explore. Through this project, experience was gained in AI search algorithm implementation, adversarial game modeling, probabilistic reasoning, GUI development with Tkinter, and collaborative software development using Git.',
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
    description: 'Developed a RESTful web API for querying and managing a comprehensive movie database spanning three decades of cinema, designed to support entertainment applications, data analysis, and developer integrations. The API provides access to over 9,000 movies with rich metadata including cast, crew, financial data, ratings, and visual assets, enabling consumers to search, filter, sort, and paginate results through well-structured endpoints. The project emphasized clean API design, relational data modeling across movies, actors, directors, genres, and studios, and interactive documentation through Swagger UI. Through this project, experience was gained in backend development with Node.js, Express, and TypeScript, SQLite database design and querying, RESTful API architecture, fuzzy search and pagination patterns, and collaborative development using GitHub-based version control workflows.',
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
    description: 'Developed a full-stack web application serving as the front-end interface for a media catalog and discovery platform, enabling users to browse, search, and manage movies and TV shows through a modern, responsive dashboard experience. The application provides authenticated access to a REST API backend, supporting full CRUD operations on media entries, paginated and searchable media browsing, detailed movie and TV show views, a personal watch list stored via local storage, and a role-aware user system with JWT-based authentication. The project emphasized clean component architecture, protected routing, and a polished Material UI design system. Through this project, experience was gained in Next.js 15 App Router patterns, TypeScript, token-based authentication with NextAuth, REST API integration using Axios, and collaborative version-controlled development using GitHub.',
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
    description: 'Developed a full-stack web application for a pet grooming salon focused on improving customer interaction and appointment management through a modern, responsive website experience. The application allows users to browse salon services, view business information, and schedule appointments online while providing an intuitive and user-friendly interface. The project emphasized responsive web design, clean UI/UX implementation, and practical business functionality tailored to small business operations. Through this project, experience was gained in full-stack development, front-end design, backend integration, and GitHub-based version control workflows.',
    images: [],
  },
];

export function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id);
}
