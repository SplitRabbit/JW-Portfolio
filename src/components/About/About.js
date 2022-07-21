import CoverPhoto from './cover_photo.png'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume } = about

  return (

      <div className='about'>
        {name && (
          <h1>
            {"Hi, I'm "}<span className='about__name'>{name}.</span>
          </h1>
        )}
        <img className='about_image' alt='Me eating with team' src={CoverPhoto}  />
        {role && <h2 className='about__role'>A {role}.</h2>}
        <p className='about__desc'>{description && description}</p>

        <div className='about__contact left'>
          {resume && (
            <a href={resume}>
              <span type='button' className='btn btn--outline'>
                Resume
              </span>
            </a>
          )}
        </div>
      </div>
  )
}

export default About
