import { useState,useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Timeline from './components/TimelineContainer/TimelineContainer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const homePage = [ <About key = {1}/>,<Contact key = {2}/>]
  const [mainPage, setmainPage] = useState(homePage);

  
  return (
    <div id='top' className={`${themeName} app`}>
      <Header mainPage = {mainPage} setmainPage = {setmainPage}/>

      <main>
        {mainPage}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
