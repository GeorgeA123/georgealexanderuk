import type { ProjectsProps, Project } from './Projects.types'
import './Projects.css'

const defaultProjects: Project[] = [
    {
        id: 'newspaper-game',
        title: 'Newspaper Game',
        subtitle: 'Interactive Web Application',
        description: 'A full-stack web application built with modern technologies, featuring real-time interactions and a polished user experience.',
        image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800&h=600&fit=crop',
        link: 'https://newspapergame.georgealexander.uk',
        tags: ['DEVELOPMENT', 'FULL-STACK'],
        year: '2025'
    }
]

const Projects = ({
                      title = 'SELECTED WORKS',
                      subtitle = '(PROJECTS)',
                      description = 'A collection of projects that showcase practical problem-solving and clean implementation. Each project represents real-world challenges solved with modern web technologies.',
                      projects = defaultProjects
                  }: ProjectsProps) => {
    return (
        <section className="projects" id="projects">
            <div className="projects__container">
                <div className="projects__header">
                    <h2 className="projects__title">{title}</h2>
                    <p className="projects__subtitle">{subtitle}</p>
                    <p className="projects__description">{description}</p>
                </div>

                <div className="projects__grid">
                    {projects.map((project) => (

                        <a key={project.id}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                        >
                        <div className="project-card__image-wrapper">
                        <img
                        src={project.image}
                        alt={project.title}
                        className="project-card__image"
                        />
                        </div>
                        <p className="project-card__subtitle">{project.subtitle}</p>
                        <h3 className="project-card__title">{project.title}</h3>
                        <div className="project-card__content">
                        <div className="project-card__tags">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="project-card__tag">
                    {tag}
                </span>
                ))}
                <span className="project-card__tag project-card__tag--year">
                    {project.year}
                  </span>
            </div>


        </div>
</a>
))}
</div>
</div>
</section>
)
}

export default Projects