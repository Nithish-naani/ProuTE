// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="logo"
        alt="wave"
      />
      <h1 className="title">Wave</h1>
    </div>

    <ul className="nav-items-list">
      <li className="link-items">
        <Link to="/" className="home">
          Home
        </Link>
      </li>
      <li className="link-items">
        <Link to="/about" className="home">
          about
        </Link>
      </li>
      <li className="link-items">
        <Link to="/contact" className="home">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
