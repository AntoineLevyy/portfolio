import { cities } from './data/cities';
import { useCityCycle } from './hooks/useCityCycle';
import { useNavTone } from './hooks/useNavTone';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';
import SiteNav from './components/SiteNav';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import './App.css';

function App() {
  const reducedMotion = usePrefersReducedMotion();
  const onDark = useNavTone();
  const { index, cycleKey, select } = useCityCycle(cities.length, { reducedMotion });

  return (
    <div className="site">
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <SiteNav onDark={onDark} />
      <main>
        <Hero
          activeIndex={index}
          cycleKey={cycleKey}
          onSelectCity={select}
          reducedMotion={reducedMotion}
        />
        <About reducedMotion={reducedMotion} />
        <Work />
      </main>
    </div>
  );
}

export default App;
