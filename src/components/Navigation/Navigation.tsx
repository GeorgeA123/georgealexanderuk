import { useState, useEffect } from 'react'
import type { NavigationProps, NavigationItem } from './Navigation.types'
import './Navigation.css'

const defaultNavItems: NavigationItem[] = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'GitHub', href: 'https://github.com/GeorgeA123', external: true },
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
          Lead Software Engineer
        </span>
                <ul className="navigation__menu">
                    {items.map((item) => (
                        <li key={item.href} className="navigation__item">
                            <a
                                href={item.href}
                                className="navigation__link"
                                {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                            >
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