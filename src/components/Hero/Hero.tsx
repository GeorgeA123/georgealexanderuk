import { useState, useEffect } from 'react'
import type { HeroProps } from './Hero.types'
import './Hero.css'

const Hero = ({
                  name = 'GEORGE ALEXANDER',
                  description = 'Passionate about solving real-world complex problems through thoughtful engineering and a focus on what actually matters—building useful, reliable software.',
                  imageSrc = '',
                  imageAlt = 'Profile photo',
                  ctaText = 'CONTACT',
                  ctaHref = '#contact',
              }: HeroProps) => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Calculate opacity and transform based on scroll
    const opacity = Math.max(1 - scrollY / 400, 0)
    const translateY = scrollY * 0.5 // Parallax effect - moves slower than scroll

    return (
        <section className="hero">
            <div
                className="hero__container"
                style={{
                    opacity,
                    transform: `translateY(${translateY}px)`
                }}
            >
                <div className="hero__content">
                    <h1 className="hero__name">{name}</h1>
                    <p className="hero__description">{description}</p>
                    <a href={ctaHref} className="hero__cta">
                        {ctaText}
                        <span className="hero__cta-icon">↗</span>
                    </a>
                </div>
                {imageSrc && (
                    <div className="hero__image-wrapper">
                        <img src={imageSrc} alt={imageAlt} className="hero__image" />
                    </div>
                )}
            </div>
        </section>
    )
}

export default Hero