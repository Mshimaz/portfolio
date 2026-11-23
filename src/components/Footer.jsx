import { PERSONAL_INFO } from '../data';

export default function Footer() {
  return (
    <footer className="shell site-footer">
      <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}</p>
      <a href="#about">Back to top</a>
    </footer>
  );
}
