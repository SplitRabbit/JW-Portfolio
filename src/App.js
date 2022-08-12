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
  const [navState,setnavState] = useState(false);
  let topNavStyle = { marginLeft: navState ? "250px" : "0" };
  let mainNavStyle = {opacity: navState ? "0.5" : "1"}

  return (
    <div id='top' className={`${themeName} app`} style={topNavStyle}>
      <Header 
        mainPage = {mainPage} 
        setmainPage = {setmainPage}
        navState = {navState}
        setnavState = {setnavState}
      />
      <main style={mainNavStyle}>
        {mainPage}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
