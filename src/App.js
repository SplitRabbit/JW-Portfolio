import { useState,useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const homePage = [ <Homepage key = {1}/>]
  const [mainPage, setmainPage] = useState(homePage);
  const [navState,setnavState] = useState(false);
  let topNavStyle = { marginLeft: navState ? "250px" : "0" };
  let mainNavStyle = {opacity: navState ? "0.7" : "1"}

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
