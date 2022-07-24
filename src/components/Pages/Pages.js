import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Timeline from '../TimelineContainer/TimelineContainer'
import './Pages.css'

const Pages = ({mainPage,setmainPage}) => {
 useContext(ThemeContext)

 function handlePageChange(event) {
    if (event.target.id === 'timeline') {
        setmainPage([<Timeline key={1}/>]);
    }else if (event.target.id === 'projects') {
        setmainPage([<Projects key={1}/>]);
    }else if (event.target.id === 'skills') {
        setmainPage([<Skills key={1}/>]);
    };
 };

  return (
    <nav className='center nav'>
      <ul className='nav__list'>
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
      </ul>

    </nav>
  )
}

export default Pages
