import { useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { PERSONAL_INFO } from '../data';

function HeroScene() {
  const stage = useRef(null);
  const reducedMotion = useReducedMotion();

  function resetAngle() {
    stage.current?.style.removeProperty('--pointer-x');
    stage.current?.style.removeProperty('--pointer-y');
  }

  function updateAngle(event) {
    if (reducedMotion || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    stage.current?.style.setProperty('--pointer-x', `${x * 24}deg`);
    stage.current?.style.setProperty('--pointer-y', `${y * -20}deg`);
  }

  return (
    <div className="hero-scene" onPointerMove={updateAngle} onPointerLeave={resetAngle}>
      <div className="scene-art" aria-hidden="true">
        <div className="scene-grid" />
        <div className="scene-orbit orbit-outer" />
        <div className="scene-orbit orbit-inner" />
        <div className="device-shadow" />
        <div className="device-stage" ref={stage}>
          <div className="device-float">
            <div className="device">
              <div className="device-back" />
              <div className="device-edge device-edge-left" />
              <div className="device-edge device-edge-right" />
              <div className="device-edge device-edge-bottom" />
              <div className="device-edge device-edge-top" />
              <div className="device-face">
                <div className="device-camera" />
                <div className="device-screen">
                  <div className="screen-top"><span className="screen-logo">S</span><span className="screen-signal" /></div>
                  <div className="screen-label">MOBILE DEVELOPMENT</div>
                  <div className="screen-heading">From code<br />to release<span>.</span></div>
                  <div className="screen-chart">
                    <i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
                  </div>
                  <div className="screen-platforms"><span>iOS</span><span>Android</span></div>
                  <div className="screen-bottom" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="scene-chip chip-flutter">Flutter</span>
        <span className="scene-chip chip-supabase">Supabase</span>
        <span className="scene-chip chip-angular">Angular</span>
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
