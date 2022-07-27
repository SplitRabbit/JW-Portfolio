import { contact } from '../../portfolio'
import './Contact.css'
// delete after grading
import ContactForm from '../ContactForm/ContactForm'

const Contact = () => {
  if (!contact.email) return null

  return (
      <section className='section contact left' id='contact'>
        <h2 className='section__title'>Contact</h2>
        <div className=''>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='contact_btn btn btn--outline'>
            Email me: jeffreykunwang@gmail.com
          </span>
        </a>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='contact_btn btn btn--outline'>
            Call me: +1 718 419 9384
          </span>
        </a>
      </div>
      </section>

  )
}

export default Contact
