import { useState } from 'react';
import { PROJECTS } from '../data';

const filters = [
  ['all', 'All projects'],
  ['published', 'Published apps'],
  ['experiments', 'Experiments'],
];

const projectArt = {
  'GoParty Seller': { theme: 'seller', mark: 'G', label: 'Manage events', stat: 'Bookings' },
  'GoParty Customer': { theme: 'customer', mark: 'G', label: 'Plan an event', stat: 'Explore' },
  Featsclub: { theme: 'feats', mark: 'F', label: 'Talent platform', stat: 'Discover' },
  'Electromate Qatar': { theme: 'electro', mark: 'E', label: 'Shop electronics', stat: 'Catalog' },
};

function ProjectArtwork({ art }) {
  return (
    <div className={`project-art art-${art.theme}`} aria-hidden="true">
      <div className="art-orbit" />
      <div className="art-device">
        <div className="art-device-top"><span>{art.mark}</span><i /></div>
        <div className="art-label">{art.label}</div>
        <div className="art-widget"><span>{art.stat}</span><i /><i /><i /><i /><i /></div>
        <div className="art-lines"><i /><i /><i /></div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const visible = PROJECTS.filter(({ links }) => {
    const published = Boolean(links.playstore || links.appstore);
    return filter === 'all' || (filter === 'published' ? published : !published);
  });

  return (
    <section className="shell content-section" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <div>
          <h2 id="projects-title">Selected work<span className="accent">.</span></h2>
          <p>Production apps, full-stack builds, and early experiments.</p>
        </div>
        <div className="project-filters" role="group" aria-label="Filter projects">
          {filters.map(([value, label]) => (
            <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>{label}</button>
          ))}
        </div>
      </div>
      <p className="sr-only" role="status">{visible.length} projects shown</p>
      <div className="project-grid">
        {visible.map((project) => {
          const art = projectArt[project.title];
          return (
            <article className="project-card" key={project.title}>
              {art && <ProjectArtwork art={art} />}
              <div className="project-body">
                <p className="project-type">{project.subtitle}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="tags" aria-label="Technologies">
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                {(project.links.playstore || project.links.appstore) && (
                  <div className="project-links">
                    {project.links.playstore && <a href={project.links.playstore} target="_blank" rel="noreferrer" aria-label={`${project.title} on Google Play`}>Google Play</a>}
                    {project.links.appstore && <a href={project.links.appstore} target="_blank" rel="noreferrer" aria-label={`${project.title} on the App Store`}>App Store</a>}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
