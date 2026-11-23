import { useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { PERSONAL_INFO } from '../data';

function HeroScene() {
  const composition = useRef(null);
  const reducedMotion = useReducedMotion();

  function resetAngle() {
    composition.current?.style.removeProperty('--pointer-x');
    composition.current?.style.removeProperty('--pointer-y');
  }

  function updateAngle(event) {
    if (reducedMotion || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    composition.current?.style.setProperty('--pointer-x', `${x * 18}deg`);
    composition.current?.style.setProperty('--pointer-y', `${y * -14}deg`);
  }

  return (
    <div className="hero-scene" onPointerMove={updateAngle} onPointerLeave={resetAngle}>
      <div className="scene-grid" aria-hidden="true" />
      <div className="scene-orbit" aria-hidden="true" />
      <div className="scene-stage">
        <div className="scene-arrival">
          <div className="scene-composition" ref={composition}>
            <div className="portrait-layer layer-back" aria-hidden="true" />
            <div className="portrait-layer layer-middle" aria-hidden="true" />
            <div className="portrait-layer layer-front">
              <img src={PERSONAL_INFO.image} alt={`Portrait of ${PERSONAL_INFO.name}`} width="716" height="716" fetchPriority="high" />
            </div>
            <div className="scene-tile tile-flutter" aria-hidden="true">
              <span className="tile-icon tile-icon-flutter" />
              <span><strong>Flutter</strong><small>Mobile</small></span>
            </div>
            <div className="scene-tile tile-angular" aria-hidden="true">
              <span className="tile-icon tile-icon-angular" />
              <span><strong>Angular</strong><small>Web</small></span>
            </div>
            <div className="scene-tile tile-supabase" aria-hidden="true">
              <span className="tile-icon tile-icon-supabase" />
              <span><strong>Supabase</strong><small>Backend</small></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [firstName, ...remainingNames] = PERSONAL_INFO.name.split(' ');
  return (
    <section className="shell hero" id="about" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-location"><span aria-hidden="true" /> Software developer based in the UAE</p>
        <h1 id="hero-title">{firstName}{' '}<span>{remainingNames.join(' ')}<span className="accent">.</span></span></h1>
        <p className="hero-intro">I build Flutter apps for iOS and Android, Angular admin tools, and Supabase backends. Currently shipping mobile products at GoParty.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work</a>
          <a className="button button-secondary" href="#contact">Get in touch</a>
        </div>
        <div className="hero-facts">
          <div><strong>3+ years</strong><span>Professional experience</span></div>
          <div><strong>iOS &amp; Android</strong><span>Published apps</span></div>
        </div>
      </div>
      <HeroScene />
    </section>
  );
}
