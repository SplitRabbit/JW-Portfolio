import Navbar from '../Navbar/Navbar'
import { header } from '../../portfolio'
import './Footer.css'


const Footer = () => {
  return (
    <header className='footer center'>
        <Navbar />
      <h3>
          <div id='footer-label'>
            @2022 Jeffrey Wang
          </div> 
      </h3>
    </header>
  )
}

export default Footer
