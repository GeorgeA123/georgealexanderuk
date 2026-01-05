import type { ServicesProps, Service } from './Services.types'
import './Services.css'

const defaultServices: Service[] = [
    {
        number: '01',
        title: 'Full-Stack Development',
        description: 'Building end-to-end web applications from database design to user interfaces. I work across the entire stack to create cohesive solutions that are performant, maintainable, and built to scale with your needs.',
        technologies: ['React, TypeScript, Modern JS', 'C#, ASP.NET Core, .NET']
    },
    {
        number: '02',
        title: 'Backend & API Development',
        description: 'Designing and implementing robust server-side architectures and RESTful APIs. I focus on writing clean, efficient code that handles data securely and integrates seamlessly with frontend applications.',
        technologies: ['ASP.NET Core Web APIs', 'PostgreSQL Database Design', 'Azure Cloud Services']
    },
    {
        number: '03',
        title: 'Cloud & Infrastructure',
        description: 'Deploying and managing applications on cloud platforms with a focus on reliability and cost-effectiveness. I work with modern DevOps practices to ensure smooth deployments and monitoring.',
        technologies: ['Azure App Services', 'CI/CD Pipelines', 'Database Management']
    }
]

const Services = ({
                      title = 'WHAT I DO',
                      subtitle = '(SERVICES)',
                      intro = 'I build full-stack web applications with a focus on creating solutions that work reliably in production. From designing databases to crafting user interfaces, I handle the complete development process to deliver applications that meet real business needs.',
                      services = defaultServices
                  }: ServicesProps) => {
    return (
        <section className="services" id="services">
            <div className="services__container">
                <div className="services__header">
                    <h2 className="services__title">{title}</h2>
                    <p className="services__subtitle">{subtitle}</p>
                    <p className="services__intro">{intro}</p>
                </div>

                <div className="services__list">
                    {services.map((service, index) => (
                        <div key={index} className="service">
                            <div className="service__header">
                                <span className="service__number">({service.number})</span>
                                <h3 className="service__title">{service.title}</h3>
                            </div>
                            <p className="service__description">{service.description}</p>
                            {service.technologies && (
                                <div className="service__technologies">
                                    {service.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="service__tech">
                      {String(techIndex + 1).padStart(2, '0')} {tech}
                    </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services