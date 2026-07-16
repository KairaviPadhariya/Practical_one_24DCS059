import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "ElderSafe",
    tech: ["AWS EC2", "Docker", "Git & GitHub", "ML", "CI/CD", "Jenkins"],
    description:
      "A cloud-deployed safety monitoring platform for elderly individuals. Containerised with Docker, automated via Jenkins CI/CD, and hosted on AWS EC2 — built with a focus on reliability and automated deployment workflows.",
    github: "https://github.com/KairaviPadhariya/ElderSafe",
    category: "DevOps / Cloud",
  },
  {
    id: 2,
    title: "Sentilytics Analyser",
    tech: ["Docker Hub", "Docker", "Render", "CI/CD", "GitHub Actions", "Linux", "NLP", "CNN"],
    description:
      "Sentilytics is a sentiment analysis application that combines Machine Learning with modern DevSecOps practices. The application provides an interactive Streamlit dashboard for analyzing customer reviews while demonstrating an end-to-end software delivery pipeline using Docker, GitHub Actions, Trivy, Docker Hub, and Render.",
    github: "https://github.com/KairaviPadhariya/sentilytics-devsecops",
    category: "DevSecOps",
  },
  {
    id: 3,
    title: "Divine ERP Wallet System",
    tech: ["Firebase", "React.js", "Vanilla CSS"],
    description:
      "Divine ERP is a powerful, React-based Enterprise Resource Planning application designed with a robust role-based access control system. It leverages Firebase for secure authentication and real-time database management, delivering tailored, seamless experiences for both Administrators and Standard Users.",
    github: "https://github.com/KairaviPadhariya/Divine-ERP_wallet-system",
    category: "Web Development",
  },
  {
    id: 4,
    title: "Server Manager",
    tech: ["Linux", "Bash", "Shell Scripting", "AWS Lightsail", ".NET", "Docker", "SQL"],
    description:
      "Designed and developed an automated server management dashboard for AWS Lightsail that enables server provisioning, SQL container management, scheduled SQL database backups, and Amazon S3 integration using .NET, Docker, Bash scripting, and AWS Lightsail.",
    github: "https://github.com/KairaviPadhariya/Server-Manager",
    category: "DevOps / AWS Cloud",
  },
  {
    id: 5,
    title: "Portfolio App",
    tech: ["React", "Vite", "React Router", "CSS", "GitHub Actions"],
    description:
      "This portfolio — built with React + Vite, featuring multi-page routing with React Router, reactive state management with useState, and deployed via GitHub Actions.",
    github: "https://github.com/KairaviPadhariya/portfolio-24DCS059",
    category: "Frontend",
  },
];

const CATEGORIES = ["All"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <main className="content">
      <h1 className="page-title">Projects</h1>
      <p className="page-subtitle">
        Real-world work across AWS cloud infrastructure, DevOps pipelines, and
        full-stack deployment automation.
      </p>

      {/* Category filter — useState: activeCategory */}
      <div className="filter-bar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "filter-btn--active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-card-header">
              <h2 className="project-title">{project.title}</h2>
              <span className="project-category">{project.category}</span>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-pill">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Projects;
