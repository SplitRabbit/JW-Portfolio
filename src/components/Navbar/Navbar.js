import { useContext,useState } from 'react'
import { social} from '../../portfolio'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import ResumeIcon from '@material-ui/icons/Description'


import './Navbar.css'

const Navbar = () => {
  const [shown, setShown] = useState(false);
  const modalBody = () => (
      <div
          style={{
              backgroundColor: '#fff',
              flexDirection: 'column',
              overflow: 'hidden',
  
              /* Fixed position */
              left: 0,
              position: 'fixed',
              top: 0,
  
              /* Take full size */
              height: '100%',
              width: '100%',
  
              /* Displayed on top of other elements */
              zIndex: 9999,
          }}
      >
          <div
              style={{
                  alignItems: 'center',
                  backgroundColor: '#000',
                  color: '#fff',
                  display: 'flex',
                  padding: '.5rem',
              }}
          >
              <div style={{ marginRight: 'auto' }}>sample-file-name.pdf</div>
              <button
                  style={{
                      backgroundColor: '#357edd',
                      border: 'none',
                      borderRadius: '4px',
                      color: '#ffffff',
                      cursor: 'pointer',
                      padding: '8px',
                  }}
                  onClick={() => setShown(false)}
              >
                  Close
              </button>
          </div>
          <div
              style={{
                  flexGrow: 1,
                  overflow: 'auto',
              }}
          >
              <Viewer fileUrl={'../../assets/Resume.pdf'} />
          </div>
      </div>
  );

return (
  <nav className='center nav'>
    <ul className='nav__list'>
            {social.github && (
              <li className='nav__list-item'>
                <a
                  href={social.github}
                  target="_blank" 
                  rel="noreferrer"
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
                target="_blank" 
                rel="noreferrer"
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
            <li className='nav__list-item'>
              <button onClick={() => setShown(true)} className='link link--icon'>
                  <ResumeIcon />
              </button>
              {shown && ReactDOM.createPortal(modalBody(), document.body)}
            </li>
    </ul>

  </nav>
)
}

export default Navbar
