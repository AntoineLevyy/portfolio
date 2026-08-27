import { useEffect, useState } from 'react';
import { cities, CITY_DURATION_MS } from '../data/cities';

function CityNavigation({ activeIndex, cycleKey, onSelect, reducedMotion }) {
  const [tabHidden, setTabHidden] = useState(
    () => (typeof document !== 'undefined' ? document.hidden : false)
  );

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  return (
    <nav className="city-nav" aria-label="City backgrounds">
      <ul className="city-nav-list">
        {cities.map((city, index) => {
          const isActive = index === activeIndex;
          return (
            <li key={city.id} className="city-nav-item">
              <button
                type="button"
                className={`city-nav-button${isActive ? ' is-active' : ''}`}
                onClick={() => onSelect(index)}
                aria-current={isActive ? 'true' : undefined}
                aria-label={`Show ${city.name}`}
              >
                <span className="city-nav-name">{city.name}</span>
                <span className="city-nav-track" aria-hidden="true">
                  {isActive ? (
                    <span
                      key={cycleKey}
                      className={`city-nav-fill${tabHidden ? ' is-paused' : ''}`}
                      style={{
                        animationDuration: reducedMotion ? '0ms' : `${CITY_DURATION_MS}ms`,
                      }}
                    />
                  ) : (
                    <span className="city-nav-fill is-idle" />
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default CityNavigation;
