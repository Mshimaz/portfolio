import { EXPERIENCE } from '../data';

export default function Experience() {
  return (
    <section className="shell content-section split-section" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <div>
          <h2 id="experience-title">Experience<span className="accent">.</span></h2>
          <p>Mobile development, backend engineering, and app delivery.</p>
        </div>
      </div>
      <div className="experience-list">
        {EXPERIENCE.map(({ company, role, duration, location, description }, index) => (
          <details key={company} className="experience-item" open={index === 0}>
            <summary>
              <span className="experience-company">{company}<span>{role}</span></span>
              <span className="experience-date">{duration}<span>{location}</span></span>
              <span className="disclosure-icon" aria-hidden="true" />
            </summary>
            <ul>
              {description.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
}
