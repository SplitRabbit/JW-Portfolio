import { header } from '../../portfolio'
import Pages from '../Pages/Pages'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <Pages/>
      <h3>
        {homepage ? (
          <a href={homepage} className='link center'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
