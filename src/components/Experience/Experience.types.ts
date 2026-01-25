export interface ExperienceItem {
    title: string
    company: string
    location: string
    period: string
    highlights: string[]
}

export interface ExperienceProps {
    title?: string
    subtitle?: string
    experiences?: ExperienceItem[]
}
