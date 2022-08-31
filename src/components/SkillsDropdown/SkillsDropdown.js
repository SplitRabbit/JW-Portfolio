import {useState} from 'react'
import CoverPhoto from '../../assets/jeffrey_08.png'
import { about,contact } from '../../portfolio'
import './SkillsDropdown.css'

const Homepage = () => {
  const [contacts, setcontacts] = useState('')
  const { name, role, description, resume } = about

  return (
    <div className='homepage'>
      <img className='about_image' alt='Portrait with Dog' src={CoverPhoto}  />
      <div className='about'>
        {name && (
          <h1 className='about__intro'>
            <div>{"Hi, I'm "}</div>
            <div className='about__name'>{name}.</div>
          </h1>
        )}
                {role && <h2 className='about__role'>A {role}.</h2>}
        <p className='about__desc'>{description && description}</p>
        
        </div>
      {contact.email && (
        <section className='section contact left' id='contact'>
            <h2 className='section__title'>Contact</h2>
            <ul>   
            <a href={`mailto:${contact.email}`}>
              <li type='button' className='contact_btn btn btn--outline'>
                Email me: jeffreykunwang@gmail.com
              </li>
            </a>
            <a href={`mailto:${contact.email}`}>
              <li type='button' className='contact_btn btn btn--outline'>
                Call me: +1 718 419 9384
              </li>
            </a>
          </ul>
        </section>
        )}
    </div>

  )
};


export default Homepage;