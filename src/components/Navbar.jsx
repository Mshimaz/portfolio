import { useState } from 'react';

const links = [
  ['Work', '#projects'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="shell nav-bar" aria-label="Main navigation">
        <a className="wordmark" href="#about" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>Shimaz<span className="accent">.</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <div id="main-menu" className="nav-links" data-open={menuOpen}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Get in touch</a>
        </div>
      </nav>
    </header>
  );
}
