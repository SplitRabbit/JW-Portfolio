import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
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

  )
}

export default Contact
