import { ThemeProvider } from './theme/ThemeProvider'
import HomePage from './pages/HomePage'

function App() {
    return (
        <ThemeProvider>
            <HomePage />
        </ThemeProvider>
    )
}

export default App