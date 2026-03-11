import styles from './About.module.css';

export function About() {
  return (
    <div className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.body}>
        <div className={styles.content}>
          <p>
            Hello! I'm Ryder DeBack, a developer based in the Pacific Northwest with a background
            spanning software testing, backend development, and cloud support. When I'm not coding,
            I enjoy exploring new technologies and playing games with friends.
          </p>

          <p>
            I got my start at Pioneer Technologies Corporation, where I spent two years working as
            both a software tester and developer. I built and maintained large SQL databases, wrote
            Python test suites, and helped lead QA operations for a team handling hundreds of
            thousands of government-mandated mail distributions each quarter. It was hands-on,
            high-stakes work that gave me a solid foundation in data integrity, testing discipline,
            and cross-functional collaboration.
          </p>

          <p>
            More recently, I interned at Amazon Web Services as a Cloud Support Associate in Seattle.
            I worked with the support engineering team diagnosing real customer issues across core AWS
            services like EC2, S3, and RDS, and contributed to the big data team by analyzing service
            failure patterns. It was a great environment to deepen my cloud knowledge and get a feel
            for how engineering operates at scale.
          </p>

          <p>
            On the technical side, I'm comfortable across a range of languages and tools — Python,
            JavaScript/TypeScript, Java, C#, and SQL are my most-used, and I've built projects with
            React, Node.js, Express, and ASP.NET Core. I also have experience with cloud and DevOps
            tooling through AWS and platforms like Vercel and GitHub Actions.
          </p>
        </div>
        <img
          src="/images/DeBackR Headshot.jpg"
          alt="Ryder DeBack"
          className={styles.headshot}
        />
      </div>
    </div>
  );
}
