import { archiveProjects } from '../data/projects';
import { Placeholder, ProjectArrow } from './CurrentProjects';

function ProjectArchive() {
  return (
    <div className="project-archive">
      <p className="work-eyebrow archive-eyebrow">Archive</p>
      <ul className="archive-list">
        {archiveProjects.map((project) => {
          const isExternal = project.href.startsWith('http');
          const isPlaceholderLink = (project.placeholderFields || []).includes('href');
          return (
            <li key={project.id}>
              <a
                className={`archive-row${isPlaceholderLink ? ' is-placeholder-link' : ''}`}
                href={project.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                title={isPlaceholderLink ? 'Placeholder: replace this URL' : undefined}
              >
                <span className="archive-number" aria-hidden="true">
                  {project.number}
                </span>
                <span className="archive-main">
                  <span className="archive-title">{project.title}</span>
                  <span className="archive-meta">
                    <Placeholder
                      value={project.role}
                      field="role"
                      placeholderFields={project.placeholderFields}
                    />
                    {' · '}
                    <Placeholder
                      value={project.category}
                      field="category"
                      placeholderFields={project.placeholderFields}
                    />
                  </span>
                </span>
                <span className="archive-description">
                  <span className="archive-label">Description</span>
                  <Placeholder
                    value={project.description}
                    field="description"
                    placeholderFields={project.placeholderFields}
                  />
                </span>
                <span className="archive-stats">
                  <span className="archive-stat">
                    <span className="archive-label">Achievement</span>
                    <Placeholder
                      value={project.achievement}
                      field="achievement"
                      placeholderFields={project.placeholderFields}
                    />
                  </span>
                  <span className="archive-stat">
                    <span className="archive-label">Learning</span>
                    <Placeholder
                      value={project.learning}
                      field="learning"
                      placeholderFields={project.placeholderFields}
                    />
                  </span>
                </span>
                <span className="archive-arrow">
                  <ProjectArrow />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectArchive;
