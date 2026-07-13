import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  const skillList = ["C++", "Docker", "HTML & CSS", "Git & GitHub", "AWS", "GCP", "Jenkins", "MongoDB", "Linux"];

  return (
    <div className="app">
      <Header name="Kairavi Padhariya" />
      <main className="content">
        <About />
        <Skills skillList={skillList} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
