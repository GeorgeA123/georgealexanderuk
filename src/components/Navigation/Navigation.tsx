import { useState, useEffect } from 'react'
import type { NavigationProps, NavigationItem } from './Navigation.types'
import './Navigation.css'

const defaultNavItems: NavigationItem[] = [
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]

const Navigation = ({ items = defaultNavItems }: NavigationProps) => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Navigation moves up proportionally with scroll - increased to fully disappear
    const navTransform = Math.min(scrollY, 200) // Increased cap to fully hide the nav

    return (
        <nav
            className="navigation"
            style={{ transform: `translateY(-${navTransform}px)` }}
        >
            <div className="navigation__container">
        <span className="navigation__brand">
          Full Stack Engineer
        </span>
                <ul className="navigation__menu">
                    {items.map((item) => (
                        <li key={item.href} className="navigation__item">
                            <a href={item.href} className="navigation__link">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation