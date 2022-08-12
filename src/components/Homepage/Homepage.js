import CoverPhoto from '../../assets/jeffrey_08.png'
import { about,contact } from '../../portfolio'
import './Homepage.css'

const Homepage = () => {
  const { name, role, description, resume } = about

  return (
    <div className='homepage'>
      <div className='about'>
        {name && (
          <h1>
            {"Hi, I'm "}<span className='about__name'>{name}.</span>
          </h1>
        )}
        <img className='about_image' alt='Portrait with Dog' src={CoverPhoto}  />
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