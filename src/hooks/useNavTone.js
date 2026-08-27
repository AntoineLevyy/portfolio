import { useEffect, useState } from 'react';

export function useNavTone() {
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    const hero = document.getElementById('top');
    if (!hero) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOnDark(entry.isIntersecting && entry.intersectionRatio > 0.45);
      },
      { threshold: [0, 0.45, 0.8] }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return onDark;
}
