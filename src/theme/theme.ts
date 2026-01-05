export interface Theme {
    colors: {
        background: string
        text: string
        buttonBackground: string
        buttonText: string
        navigationBg: string
        navigationBorder: string
    }
    fonts: {
        primary: string
    }
}

export const defaultTheme: Theme = {
    colors: {
        background: '#F5F1ED',
        text: '#2C2C2C',
        buttonBackground: '#C1685F',
        buttonText: '#F5F1ED',
        navigationBg: 'rgba(245, 241, 237, 0.95)',
        navigationBorder: 'rgba(44, 44, 44, 0.05)',
    },
    fonts: {
        primary: "'ABC Oracle', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
}