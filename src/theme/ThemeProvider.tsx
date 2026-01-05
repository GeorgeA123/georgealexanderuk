import React, { createContext, useContext, useEffect } from 'react'
import {type Theme, defaultTheme } from './theme'

interface ThemeContextType {
    theme: Theme
}

const ThemeContext = createContext<ThemeContextType>({ theme: defaultTheme })

export const useTheme = () => useContext(ThemeContext)

interface ThemeProviderProps {
    children: React.ReactNode
    theme?: Theme
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
                                                                children,
                                                                theme = defaultTheme
                                                            }) => {
    useEffect(() => {
        // Apply theme CSS variables to :root
        const root = document.documentElement
        root.style.setProperty('--color-background', theme.colors.background)
        root.style.setProperty('--color-text', theme.colors.text)
        root.style.setProperty('--color-button-bg', theme.colors.buttonBackground)
        root.style.setProperty('--color-button-text', theme.colors.buttonText)
        root.style.setProperty('--color-navigation-bg', theme.colors.navigationBg)
        root.style.setProperty('--color-navigation-border', theme.colors.navigationBorder)
        root.style.setProperty('--font-primary', theme.fonts.primary)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    )
}