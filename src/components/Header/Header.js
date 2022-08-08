import { useState} from 'react'
import { header } from '../../portfolio'
import Pages from '../Pages/Pages'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Timeline from '../TimelineContainer/TimelineContainer'
import './Header.css'


const Header = ({mainPage,setmainPage}) => {
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
      linkEl[i].style.color = 'var(--clr-primary)'
    } else {
      linkEl[i].style.color = 'var(--clr-fg)'
    }
   }
};

  return (
    <header className='header center'>
      <h3>
          <div  className='link center' id='home'  
          onClick={handlePageChange}>
            {title}
          </div> 
      </h3>
      <Pages handlePageChange = {handlePageChange}/> 
    </header> 
  )
}

export default Header
