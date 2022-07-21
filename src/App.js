import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Timeline from './components/TimelineContainer/TimelineContainer'
import ProjectCarousel from './components/ProjectCarousel/ProjectCarousel'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Contact />
        <Projects />
        <Skills />
        <Timeline />
      </main>

      <ScrollToTop />
    </div>
  )
}

export default App
