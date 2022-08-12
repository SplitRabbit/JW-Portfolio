import { useContext} from 'react'
import { header } from '../../portfolio'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Sidenav from '../Sidenav/Sidenav'
import Timeline from '../TimelineContainer/TimelineContainer'
import './Header.css'
import { ThemeContext } from '../../contexts/theme'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'



const Header = ({mainPage,setmainPage}) => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  useContext(ThemeContext)
  const { homepage, title } = header;
  
  function handlePageChange(event) {
    console.log("User now on",event.target.id);
  if (event.target.id === 'home') {
      setmainPage([ <About key = {1}/>,<Contact key = {2}/>]);
  }else if (event.target.id === 'timeline') {
      setmainPage([<Timeline key={1}/>]);
  }else if (event.target.id === 'projects') {
      setmainPage([<Projects key={1}/>]);
  }else if (event.target.id === 'skills') {
      setmainPage([<Skills key={1}/>]);
  };
  let linkEl = document.getElementsByClassName('link');
   for (let i = 0; i<linkEl.length; i++) {
    if (linkEl[i].id === event.target.id) {
      linkEl[i].classList.add("active-link")
    } else {
      linkEl[i].classList.remove("active-link")
    }
   }
};

  return (
    <header className='header center'>
      <Sidenav handlePageChange = {handlePageChange}/>
      <h3>
          <div  className='active-link link center' id='home'  
          onClick={handlePageChange}>
            {title}
          </div> 
      </h3>
      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme nav__list-item '
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>
    </header> 
  )
}

export default Header