function Skills({ skillList }) {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-heading">Skills</h2>
      <ul className="skills-list">
        {skillList.map((s) => (
          <li className="skill-pill" key={s}>
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
