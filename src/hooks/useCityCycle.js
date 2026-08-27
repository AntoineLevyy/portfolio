import { useCallback, useEffect, useRef, useState } from 'react';
import { CITY_DURATION_MS } from '../data/cities';

export function useCityCycle(count, { duration = CITY_DURATION_MS, reducedMotion = false } = {}) {
  const [index, setIndex] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);
  const timerRef = useRef(0);
  const generationRef = useRef(0);

  const clearTimer = () => {
    window.clearTimeout(timerRef.current);
    timerRef.current = 0;
  };

  const select = useCallback(
    (nextIndex) => {
      generationRef.current += 1;
      clearTimer();
      setIndex(((nextIndex % count) + count) % count);
      setCycleKey((key) => key + 1);
    },
    [count]
  );

  useEffect(() => {
    if (reducedMotion) return undefined;

    const generation = generationRef.current;
    const nextIndex = (index + 1) % count;
    let startedAt = performance.now();
    let remaining = duration;

    const arm = () => {
      clearTimer();
      startedAt = performance.now();
      timerRef.current = window.setTimeout(() => {
        if (generationRef.current !== generation) return;
        setIndex(nextIndex);
      }, remaining);
    };

    const onVisibility = () => {
      if (generationRef.current !== generation) return;
      if (document.hidden) {
        clearTimer();
        remaining = Math.max(remaining - (performance.now() - startedAt), 0);
        return;
      }
      arm();
    };

    if (!document.hidden) arm();
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      clearTimer();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [index, cycleKey, count, duration, reducedMotion]);

  return { index, cycleKey, select };
}
