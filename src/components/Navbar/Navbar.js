import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import ResumeIcon from '@material-ui/icons/Description'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { social} from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >

              {social.resume && (
                <li className='nav__list-item'>
                  <a
                    href={social.resume}
                    aria-label='resume'
                    className='link link--icon'
                  >
                    <ResumeIcon />
                  </a>
                </li>
              )}
              {social.github && (
                <li className='nav__list-item'>
                  <a
                    href={social.github}
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
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>
              )}

            <button
            type='button'
            onClick={toggleTheme}
            className='btn btn--icon nav__theme nav__list-item '
            aria-label='toggle theme'
          >
            {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
          </button>
      </ul>
      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>

    </nav>
  )
}

export default Navbar
