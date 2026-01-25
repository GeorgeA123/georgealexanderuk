import type { ServicesProps, Service } from './Services.types'
import './Services.css'

const defaultServices: Service[] = [
    {
        number: '01',
        title: '.NET Backend Development',
        description: 'Building robust, scalable backend systems with C# and .NET. I design and implement RESTful APIs using ASP.NET Core, applying patterns like CQRS and MediatR to create maintainable, testable codebases that handle complex business logic.',
        technologies: ['C#, ASP.NET Core, Entity Framework Core', '.NET Core, MediatR, REST APIs']
    },
    {
        number: '02',
        title: 'System Architecture & Design',
        description: 'Designing layered architectures that separate concerns and scale with your organisation. I select and adapt patterns based on the problem at hand, documenting decisions via ADRs and establishing standards that teams can follow consistently.',
        technologies: ['CQRS, Domain Driven Design', 'Vertical Slice Architecture', 'Clean Architecture Patterns']
    },
    {
        number: '03',
        title: 'Azure Cloud Services',
        description: 'Deploying and integrating cloud-native solutions on Azure. From serverless functions to message-driven architectures, I build systems that leverage Azure services for reliability, scalability, and cost-effectiveness.',
        technologies: ['Azure Functions, Service Bus', 'PostgreSQL, CosmosDB, Oracle', 'Entra Authentication, Terraform']
    }
]

const Services = ({
                      title = 'WHAT I DO',
                      subtitle = '(EXPERTISE)',
                      intro = 'I specialise in .NET backend development, building the server-side systems that power complex applications. From designing clean architectures to implementing cloud-native solutions on Azure, I focus on creating backend systems that are reliable, maintainable, and built to scale.',
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