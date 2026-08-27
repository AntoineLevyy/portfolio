import { useEffect, useRef, useState } from 'react';
import { aboutCopy } from '../data/about';

function About({ reducedMotion }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || reducedMotion) return undefined;

    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      const view = window.innerHeight || 1;
      const progress = Math.min(Math.max((view - rect.top) / (view + rect.height), 0), 1);
      node.style.setProperty('--light-shift', (progress * 2 - 1).toFixed(3));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [reducedMotion]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about${visible ? ' is-visible' : ''}${reducedMotion ? ' is-static' : ''}`}
    >
      <div className="about-paper" aria-hidden="true" />
      <div className="about-light" aria-hidden="true" />
      <div className="about-grain" aria-hidden="true" />

      <div className="about-inner">
        <p className="about-eyebrow">{aboutCopy.eyebrow}</p>
        <h2 className="about-headline">
          {aboutCopy.headline.map((line) => (
            <span key={line} className="about-line">
              {line}
            </span>
          ))}
        </h2>
        <div className="about-copy">
          {aboutCopy.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <p className="about-places">{aboutCopy.places}</p>
      </div>
    </section>
  );
}

export default About;
