import { EDUCATION, LANGUAGES } from '../data';

export default function Education() {
  return (
    <section className="shell content-section education-section" id="education" aria-label="Education and languages">
      <div className="education-card">
        <h2>Education</h2>
        <h3>{EDUCATION.degree}</h3>
        <p>{EDUCATION.university}</p>
        <p>{EDUCATION.location} · {EDUCATION.graduation}</p>
      </div>
      <div className="education-card">
        <h2>Languages</h2>
        <dl className="language-list">
          {LANGUAGES.map(({ name, proficiency }) => (
            <div key={name}><dt>{name}</dt><dd>{proficiency}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}
