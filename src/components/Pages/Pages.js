import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import { social} from '../../portfolio'
import './Pages.css'

const Navbar = () => {
 useContext(ThemeContext)

  return (
    <nav className='center nav'>
      <ul
        className='nav__list'
      >
                <li className='nav__list-item'>
                  <a
                    href={social.resume}
                    aria-label='resume'
                    className='link link--icon'
                  >
                    Timeline
                  </a>
                </li>
                <li className='nav__list-item'>
                  <a
                    href={social.github}
                    aria-label='github'
                    className='link link--icon'
                  >
                    Projects
                  </a>
                </li>
      </ul>

    </nav>
  )
}

export default Navbar
