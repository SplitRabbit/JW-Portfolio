import { useContext } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import ResumeIcon from '@material-ui/icons/Description'
import Resume from '../../assets/Resume.pdf'
import { ThemeContext } from '../../contexts/theme'
import { social} from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)

  return (
    <nav className='center nav'>
      <ul
        className='nav__list'
      >
              {social.github && (
                <li className='nav__list-item'>
                  <a
                    href={social.github}
                    target="_blank" 
                    rel="noreferrer"
                    aria-label='github'
                    className='link link--icon'
                  >
                    <GitHubIcon />
                  </a>
                </li>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank" 
                  rel="noreferrer"
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>
              )}
              <li className='nav__list-item'>
                <div>
                  <a href={Resume} 
                  target="_blank" 
                  rel="noreferrer"
                  className='link link--icon'>
                    <ResumeIcon />
                  </a>
                </div>
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

export default Navbar
