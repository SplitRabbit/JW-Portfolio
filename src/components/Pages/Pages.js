import { useContext} from 'react'
import './Pages.css'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import { ThemeContext } from '../../contexts/theme'

const Pages = ({handlePageChange}) => {
    const [{ themeName, toggleTheme }] = useContext(ThemeContext)
    useContext(ThemeContext)
  
    return (
      <nav className='center nav'>
        <ul
          className='nav__list'
        >
                  <li 
                      id='timeline'
                      className='nav__list-item link link--icon'
                      aria-label='timeline'
                      onClick={handlePageChange}>
                      Timeline
                  </li>
                  <li 
                      id='projects'
                      className='nav__list-item link link--icon'
                      aria-label='projects'
                      onClick={handlePageChange}>
                      Projects
                  </li>
                  <li 
                      id='skills'
                      className='nav__list-item link link--icon'
                      aria-label='skills'
                      onClick={handlePageChange}>
                      Skills
                  </li>
              <button
              type='button'
              onClick={toggleTheme}
              className='btn btn--icon nav__theme nav__list-item '
              aria-label='toggle theme'
            >
              {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
            </button>
        </ul>
  
      </nav>
    )

}

export default Pages
