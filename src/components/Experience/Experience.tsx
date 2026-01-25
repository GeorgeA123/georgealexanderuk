import type { ExperienceProps, ExperienceItem } from './Experience.types'
import './Experience.css'

const defaultExperiences: ExperienceItem[] = [
    {
        title: 'Lead Software Engineer',
        company: 'Kainos - Crown Prosecution Service',
        location: 'Birmingham, UK',
        period: 'Sept 2025 - Present',
        highlights: [
            'Designed Gateway-based Strangler Fig migration pattern, enabling incremental legacy replacement with instant rollback via feature flags, reducing migration risk across 4 suppliers',
            'Integrated SonarCloud into PR pipeline, increasing code coverage from 11% to 80%+ on new code through Quality Gate enforcement',
            'Founded Tech Guild for 20+ engineers, presenting clean architecture patterns, Entra authentication, and .NET best practices',
            'Led AI adoption initiative, building Copilot agents that cut refactoring time from days to hours and upskilling 20+ engineers to build and customise their own agents'
        ]
    },
    {
        title: 'Senior Software Engineer',
        company: 'Kainos - Crown Prosecution Service',
        location: 'Birmingham, UK',
        period: 'June 2024 - Sept 2025',
        highlights: [
            'Designed and delivered Business Continuity system enabling prosecutors to continue making charging decisions during CMS downtime, with automatic reconciliation when systems restore',
            'Designed and implemented new layered architecture (API, Application, Domain, Infrastructure) with Repository, Strategy, and Unit of Work patterns, documented via ADR and now enforced as programme standard across 7+ teams',
            'Built Police Messaging Testing API by reverse-engineering legacy code, replacing manual 2-UI process and enabling Kainos automated QA team expansion',
            'Implemented Entra authentication with App Registrations managed via Terraform, ensuring consistency across environments'
        ]
    },
    {
        title: 'Software Engineer & Graduate',
        company: 'Kainos - DEFRA & Evolve Healthcare',
        location: 'Birmingham, UK',
        period: 'Sept 2022 - April 2024',
        highlights: [
            'Built Blazor application with microservices suite using .NET Core, Azure Functions, and Service Bus',
            'Implemented CosmosDB with appropriate consistency configuration for distributed data access',
            'Developed backend APIs using MediatR pattern with Redis caching layer',
            'Developed healthcare application features using .NET Core and Azure services'
        ]
    }
]

const Experience = ({
    title = 'EXPERIENCE',
    subtitle = '(CAREER)',
    experiences = defaultExperiences
}: ExperienceProps) => {
    return (
        <section className="experience" id="experience">
            <div className="experience__container">
                <div className="experience__header">
                    <h2 className="experience__title">{title}</h2>
                    <p className="experience__subtitle">{subtitle}</p>
                </div>

                <div className="experience__list">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-item__info">
                                <h3 className="experience-item__title">{exp.title}</h3>
                                <p className="experience-item__company">{exp.company}</p>
                                <div className="experience-item__meta">
                                    <span className="experience-item__period">{exp.period}</span>
                                    <span className="experience-item__location">{exp.location}</span>
                                </div>
                            </div>
                            <div className="experience-item__content">
                                <ul className="experience-item__highlights">
                                    {exp.highlights.map((highlight, hIndex) => (
                                        <li key={hIndex} className="experience-item__highlight">
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
