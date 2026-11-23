import { PERSONAL_INFO } from '../data';

export default function Contact() {
  return (
    <section className="shell content-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div className="contact-copy">
          <img src={PERSONAL_INFO.image} alt="" width="72" height="72" loading="lazy" />
          <h2 id="contact-title">Let’s talk<span className="accent">.</span></h2>
          <p>Have a Flutter project or a full-stack product in mind? I’m based in the UAE.</p>
          <a className="button button-primary" href={`mailto:${PERSONAL_INFO.email}`}>Send me an email</a>
        </div>
        <div className="contact-links">
          <a href={`mailto:${PERSONAL_INFO.email}`}><span>Email</span>{PERSONAL_INFO.email}</a>
          <a href={`tel:${PERSONAL_INFO.phone.replaceAll(' ', '')}`}><span>Phone (UAE)</span>{PERSONAL_INFO.phone}</a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span>Muhammed Shimaz</a>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer"><span>GitHub</span>Mshimaz</a>
        </div>
      </div>
    </section>
  );
}
