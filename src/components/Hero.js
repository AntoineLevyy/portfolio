import { socialLinks } from '../data/social';
import { cities } from '../data/cities';
import CityBackground from './CityBackground';
import CityNavigation from './CityNavigation';

function Hero({ activeIndex, cycleKey, onSelectCity, reducedMotion }) {
  const activeCity = cities[activeIndex];

  return (
    <section
      id="top"
      className="hero"
      aria-label={`Introduction, with ${activeCity.name} in the background`}
    >
      <CityBackground activeIndex={activeIndex} reducedMotion={reducedMotion} />

      <div className="hero-content">
        <div className="hero-intro">
          <div className="hero-portrait-wrap">
            <picture>
              <source srcSet="/images/portrait.webp" type="image/webp" />
              <img
                src="/images/portrait.jpg"
                alt="Portrait of Antoine Levy"
                className="hero-portrait"
                width="96"
                height="96"
              />
            </picture>
          </div>

          <p className="hero-name">Antoine Levy</p>

          <h1 className="hero-headline">
            <span className="hero-line">Founder, Product and GTM generalist</span>
            <span className="hero-line">
              building <em>AI applications</em>
            </span>
          </h1>

          <h2 className="hero-description">
            I spend my time building AI applications, building and running GTM plays, and learning
            as much as possible from others.
          </h2>

          <ul className="hero-social" id="contact">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={link.placeholder ? 'is-placeholder' : undefined}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  title={link.placeholder ? 'Placeholder: replace this URL' : undefined}
                >
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hero-footer">
        <a className="scroll-cue" href="#about">
          Scroll <span aria-hidden="true">↓</span>
        </a>
        <CityNavigation
          activeIndex={activeIndex}
          cycleKey={cycleKey}
          onSelect={onSelectCity}
          reducedMotion={reducedMotion}
        />
      </div>
    </section>
  );
}

export default Hero;
