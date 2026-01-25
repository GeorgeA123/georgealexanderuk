import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Projects from '../components/Projects/Projects'
import Experience from '../components/Experience/Experience'
import Contact from '../components/Contact/Contact'
import Navigation from '../components/Navigation/Navigation'

const HomePage = () => {
    return (
        <div className="page">
            <Navigation />
            <Hero />
            <Services />
            <Experience />
            <Projects />
            <Contact />
        </div>
    )
}

export default HomePage