export interface Project {
    id: string
    title: string
    subtitle: string
    description: string
    image: string
    link?: string
    tags: string[]
    year: string
    githubLink?: string
}

export interface ProjectsProps {
    title?: string
    subtitle?: string
    description?: string
    projects?: Project[]
}