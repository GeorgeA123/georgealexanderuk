import type { ProjectsProps, Project } from './Projects.types'
import './Projects.css'

const defaultProjects: Project[] = [
    {
        id: 'todays-news',
        title: "Today's News",
        subtitle: 'AI-Powered News Aggregator',
        description: 'AI-powered news aggregator that clusters articles from many sources, generates comparative summaries, and surfaces editorial bias by analysing coverage gaps and language differences across political leanings.',
        image: '/images/projects/todaysnews.gif',
        link: 'https://today-news.georgealexander.uk/',
        tags: ['PYTHON', '.NET', 'REACT', 'AI'],
        year: '2025',
        githubLink: 'https://github.com/GeorgeA123/todays-news'
    },
    {
        id: 'newspaper-game',
        title: 'Guess What Paper',
        subtitle: 'Interactive Web Application',
        description: 'Read the headline. Guess which newspaper published it. Test your ability to spot media bias and writing styles.',
        image: '/images/projects/guess-what-paper.gif',
        link: 'https://guesswhatpaper.georgealexander.uk/',
        tags: ['DEVELOPMENT', 'FULL-STACK'],
        year: '2025'
    },
    {
        id: 'openevents',
        title: 'OpenEvents',
        subtitle: 'Event Management Platform',
        description: 'Platform for promoters to host open mic and open decks music events. Features dynamic forms for organisers to gather participant info, application tracking for artists, and submission management. Used by hundreds of real applicants before sunset.',
        image: '/images/projects/openevents.png',
        tags: ['.NET', 'BLAZOR WASM', 'FULL-STACK'],
        year: '2024',
        githubLink: 'https://github.com/GeorgeA123/OpenDecks.Backend'
    },
    {
        id: 'nhs-research',
        title: 'NHS Service Review Analysis',
        subtitle: 'Published Research',
        description: 'Published research applying NLP (topic modelling and sentiment analysis) to analyse NHS service reviews. Built data pipeline for processing and analysing patient feedback at scale; 25 citations.',
        image: '/images/projects/jmir.png',
        link: 'https://medinform.jmir.org/2022/4/e29385/',
        tags: ['PYTHON', 'NLP', 'RESEARCH'],
        year: '2022'
    }
]

const Projects = ({
                      title = 'PERSONAL PROJECTS',
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
                        <div key={project.id} className="project-card">
                            <div className="project-card__content">
                                <p className="project-card__subtitle">{project.subtitle}</p>
                                <h3 className="project-card__title">{project.title}</h3>
                                <p className="project-card__description">{project.description}</p>
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
                                <div className="project-card__links">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-card__link"
                                        >
                                            View Project <span className="project-card__link-icon">↗</span>
                                        </a>
                                    )}
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-card__link project-card__link--github"
                                        >
                                            GitHub <span className="project-card__link-icon">↗</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="project-card__image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-card__image"
                                />
                            </div>
                        </div>
                    ))}
                </div>
</div>
</section>
)
}

export default Projects