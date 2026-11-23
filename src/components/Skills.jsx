import { SKILLS } from '../data';

export default function Skills() {
  return (
    <section className="shell content-section" id="skills" aria-labelledby="skills-title">
      <div className="section-heading">
        <div><h2 id="skills-title">Technical skills<span className="accent">.</span></h2></div>
      </div>
      <div className="skill-grid">
        {SKILLS.map(({ category, skills }) => (
          <article key={category} className="skill-card">
            <h3>{category}</h3>
            <ul className="tags">
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
