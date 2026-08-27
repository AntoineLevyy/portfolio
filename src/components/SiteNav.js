import { contactEmail } from '../data/social';

function SiteNav({ onDark }) {
  return (
    <header className={`site-nav${onDark ? ' is-on-dark' : ' is-on-light'}`}>
      <a className="site-mark" href="#top" aria-label="Antoine Levy, home">
        AL
      </a>
      <nav aria-label="Primary">
        <ul className="site-nav-links">
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href={`mailto:${contactEmail}`}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default SiteNav;
