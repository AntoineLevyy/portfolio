import CurrentProjects from './CurrentProjects';
import ProjectArchive from './ProjectArchive';

function Work() {
  return (
    <section id="work" className="work" aria-labelledby="work-heading">
      <div className="work-paper" aria-hidden="true" />
      <div className="work-grain" aria-hidden="true" />
      <div className="work-inner">
        <CurrentProjects />
        <ProjectArchive />
      </div>
    </section>
  );
}

export default Work;
