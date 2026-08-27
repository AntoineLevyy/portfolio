import { currentProjects } from '../data/projects';

function Placeholder({ value, field, placeholderFields = [] }) {
  const isPlaceholder = placeholderFields.includes(field);
  if (!isPlaceholder) return value;
  return (
    <span className="placeholder-copy" title="Placeholder: replace this copy">
      {value}
    </span>
  );
}

function ProjectArrow() {
  return (
    <svg className="project-arrow-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path
        d="M4 12 L12 4 M7 4 H12 V9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="square"
      />
    </svg>
  );
}

function CurrentProjects() {
  return (
    <div className="current-projects">
      <header className="work-header">
        <div className="work-header-row">
          <h2 className="work-title" id="work-heading">
            Selected work
          </h2>
          <p className="work-lede">The products, companies and experiments shaping how I build.</p>
        </div>
        <div className="work-rule" />
      </header>

      <p className="work-eyebrow">Current</p>

      <ul className="current-grid">
        {currentProjects.map((project) => (
          <li key={project.id}>
            <a
              className={`project-panel theme-${project.theme}`}
              href={project.href}
              target={project.href.startsWith('http') ? '_blank' : undefined}
              rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <div className="panel-art" aria-hidden="true">
                <div className="panel-texture" />
              </div>
              <div className="panel-top">
                <span className="panel-number">{project.number}</span>
                <ProjectArrow />
              </div>
              <h3 className="panel-title">{project.title}</h3>
              <p className="panel-meta">
                {project.role} · {project.category}
              </p>
              <p className="panel-description">
                <Placeholder
                  value={project.description}
                  field="description"
                  placeholderFields={project.placeholderFields}
                />
              </p>
              <div className="panel-rule" />
              <dl className="panel-notes">
                <div>
                  <dt>Achievement</dt>
                  <dd>
                    <Placeholder
                      value={project.achievement}
                      field="achievement"
                      placeholderFields={project.placeholderFields}
                    />
                  </dd>
                </div>
                <div>
                  <dt>Learning</dt>
                  <dd>
                    <Placeholder
                      value={project.learning}
                      field="learning"
                      placeholderFields={project.placeholderFields}
                    />
                  </dd>
                </div>
              </dl>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CurrentProjects;
export { Placeholder, ProjectArrow };
