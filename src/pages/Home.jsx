import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";

function Home() {
  const skillList = [
    "C++",
    "Python",
    "Docker",
    "HTML & CSS",
    "Git & GitHub",
    "AWS",
    "GCP",
    "Jenkins",
    "MongoDB",
    "Linux",
    "React",
    "CI/CD Pipelines",
    "Bash Scripting",
  ];

  return (
    <main className="content">
      <About />
      <Skills skillList={skillList} />
    </main>
  );
}

export default Home;
