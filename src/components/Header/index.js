// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  const a = 'a'
  return (
    <div className="headerContainer">
      <div className="liElement">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
          className="logo"
          alt="wave"
        />
        <h1 className="head">Wave</h1>
      </div>
      <ul className="headerTabsList">
        <li>
          <Link className="navlink" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navlink" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="navlink" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
