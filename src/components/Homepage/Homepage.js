import {useState} from 'react'
import CoverPhoto from '../../assets/jeffrey_08.png'
import { about,contact } from '../../portfolio'
import './Homepage.css'

const Homepage = () => {
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
    </div>

  )
};


export default Homepage;