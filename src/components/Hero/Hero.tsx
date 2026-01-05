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
    return (
        <section className="hero">
            <div className="hero__container">
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