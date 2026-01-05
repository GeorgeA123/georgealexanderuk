import type { NavigationProps, NavigationItem } from './Navigation.types'
import './Navigation.css'

const defaultNavItems: NavigationItem[] = [
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]

const Navigation = ({ items = defaultNavItems }: NavigationProps) => {
    return (
        <nav className="navigation">
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