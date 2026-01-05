export interface Service {
    number: string
    title: string
    description: string
    technologies?: string[]
}

export interface ServicesProps {
    title?: string
    subtitle?: string
    intro?: string
    services?: Service[]
}