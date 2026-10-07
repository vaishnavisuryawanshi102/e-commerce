import React, { useContext } from 'react'
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../theme/ThemeProvider';
import { IoSunny, IoSunnyOutline } from "react-icons/io5";

const Navbar = ({loggedUser, setLoggedUser}) => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const navigate= useNavigate()

  function handleLogout(){
    setLoggedUser('')
    navigate('/')
  }

  return (
    <nav className={`navbar navbar-expand-lg 
    ${theme == 'light' ? 'bg-body-tertiary' :'bg-dark'}
    `}
      data-bs-theme={`${theme == 'light' ? '' : "dark"}`}
    >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">E-Commerce</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Cart</a>
        <a className="nav-link" href="#">Pricing</a>
      </div>
    </div>
    <div className="d-flex" role="search">
        <Link to='/cart'><FaShoppingBag /><sup className='badge '>0</sup></Link>
        <FaUser /><span className='px-3'>{loggedUser && loggedUser.name}</span>
        <button onClick={toggleTheme}>
          {theme == 'light' ? <IoSunnyOutline /> : <IoSunny/>}
        </button>
        <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
      </div>
  </div>
</nav>
  )
}

export default Navbar