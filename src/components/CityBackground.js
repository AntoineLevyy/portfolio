import { useEffect, useRef, useState } from 'react';
import { cities, CITY_FADE_MS, CITY_FADE_REDUCED_MS } from '../data/cities';

function CityBackground({ activeIndex, reducedMotion }) {
  const fadeMs = reducedMotion ? CITY_FADE_REDUCED_MS : CITY_FADE_MS;
  const layerId = useRef(0);
  const [layers, setLayers] = useState(() => [{ id: 0, index: activeIndex }]);
  const [tabHidden, setTabHidden] = useState(
    () => (typeof document !== 'undefined' ? document.hidden : false)
  );

  useEffect(() => {
    cities.forEach((city) => {
      const image = new Image();
      image.src = city.webp;
      const fallback = new Image();
      fallback.src = city.jpg;
    });
  }, []);

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  useEffect(() => {
    setLayers((prev) => {
      const top = prev[prev.length - 1];
      if (top.index === activeIndex) return prev;
      layerId.current += 1;
      return [top, { id: layerId.current, index: activeIndex }];
    });

    const timer = window.setTimeout(() => {
      setLayers((prev) => [prev[prev.length - 1]]);
    }, fadeMs);

    return () => window.clearTimeout(timer);
  }, [activeIndex, fadeMs]);

  return (
    <div className="city-background" aria-hidden="true">
      {layers.map((layer, order) => {
        const city = cities[layer.index];
        const incoming = layers.length > 1 && order === layers.length - 1;
        return (
          <div
            key={layer.id}
            className={`city-layer city-layer--${city.id}${incoming ? ' is-incoming' : ''}${
              reducedMotion ? ' is-static' : ''
            }`}
            style={{
              zIndex: order + 1,
              animationDuration: incoming ? `${fadeMs}ms` : undefined,
            }}
          >
            <picture>
              <source srcSet={city.webp} type="image/webp" />
              <img
                src={city.jpg}
                alt=""
                className={`${!reducedMotion ? 'is-moving' : ''}${
                  tabHidden && !reducedMotion ? ' is-paused' : ''
                }`.trim() || undefined}
                decoding={layer.index === 0 ? 'sync' : 'async'}
                fetchPriority={layer.index === 0 ? 'high' : 'low'}
                draggable="false"
              />
            </picture>
          </div>
        );
      })}
      <div className="city-overlay" />
      <div className="city-grain" />
    </div>
  );
}

export default CityBackground;
