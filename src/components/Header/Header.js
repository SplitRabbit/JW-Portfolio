import { header } from '../../portfolio'
import Pages from '../Pages/Pages'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Timeline from '../TimelineContainer/TimelineContainer'
import './Header.css'


const Header = ({mainPage,setmainPage}) => {
  const { homepage, title } = header;
  function handlePageReset() {
    setmainPage([ <About key = {1}/>,<Contact key = {2}/>,<Projects key = {3}/>,<Skills key = {4}/>,<Timeline key = {5}/>])
  };

  return (
    <header className='header center'>
      <Pages mainPage = {mainPage} setmainPage = {setmainPage}/> 
      <h3>
          <div  className='link center' onClick={handlePageReset}>
            {title}
          </div> 
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
