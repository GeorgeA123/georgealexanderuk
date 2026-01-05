import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Projects from '../components/Projects/Projects'
import Navigation from '../components/Navigation/Navigation'

const HomePage = () => {
    return (
        <div className="page">
            <Navigation />
            <Hero />
            <Services />
            <Projects />
        </div>
    )
}

export default HomePage