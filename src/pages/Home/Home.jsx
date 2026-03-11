import styles from './Home.module.css';

export function Home() {
  return (
    <div className={styles.home}>
      <h2>Welcome to my Portfolio</h2>
      <p>
        This is the personal portfolio site of Ryder DeBack — a developer with experience in
        cloud support, software testing, and full-stack development. Browse around to learn more
        about my background and the projects I've worked on.
      </p>

      <h3>How to navigate</h3>
      <ul className={styles.helpList}>
        <li>
          <strong>Menu button</strong> (bottom-left) — Opens the start menu where you can navigate
          to any page on the site.
        </li>
        <li>
          <strong>Taskbar tabs</strong> (bottom-center) — Shows your open pages. Click a tab to
          switch to it.
        </li>
        <li>
          <strong>✕ button</strong> (top-right of a page) — Closes the current tab that you are in.
        </li>
        <li>
          <strong>☀️ / 🌙 button</strong> (bottom-right) — Toggles between light and dark mode.
        </li>
      </ul>
    </div>
  );
}
