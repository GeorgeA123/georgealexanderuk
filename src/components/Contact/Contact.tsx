import { useCallback } from 'react'
import type { ContactProps } from './Contact.types'
import './Contact.css'

const Contact = ({
    title = 'GET IN TOUCH',
    subtitle = '(CONTACT)',
    description = "Interested in working together or have a question? I'd love to hear from you."
}: ContactProps) => {
    // Bot-resistant email handling - email assembled at runtime
    const handleEmailClick = useCallback(() => {
        const parts = ['George.i.alexander', 'live.co.uk']
        window.location.href = `mailto:${parts[0]}@${parts[1]}`
    }, [])

    // Display email with visual obfuscation that's human-readable
    const getDisplayEmail = () => {
        return (
            <>
                George.i.alexander
                <span className="contact__at">@</span>
                live.co.uk
            </>
        )
    }

    return (
        <section className="contact" id="contact">
            <div className="contact__container">
                <div className="contact__header">
                    <h2 className="contact__title">{title}</h2>
                    <p className="contact__subtitle">{subtitle}</p>
                    <p className="contact__description">{description}</p>
                </div>

                <div className="contact__content">
                    <button
                        type="button"
                        onClick={handleEmailClick}
                        className="contact__email-btn"
                        aria-label="Send email"
                    >
                        <span className="contact__email-text">
                            {getDisplayEmail()}
                        </span>
                        <span className="contact__email-icon">↗</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Contact
