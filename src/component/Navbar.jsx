import React, { useState ,useEffect} from 'react'
import "./navbar.css"
import {Link} from 'react-router-dom'
import logo from './logo.png'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
const Menu = () => (
  <>
    <p><Link to='/' className='liks'>Home</Link></p>

    <div className="dropdown">
    <p  className="dropbtnn" ><Link to='/products' className='liks' style={{textDecoration:"none"}}>Petrol Products</Link></p>
    {/* <div className="dropdown-content">
      <Link to="/filterproduct">Engine oil</Link>
      <Link to="/filterproduct">Car gear oil</Link>

      <Link to="/filterproduct">Maine oil</Link>

      <Link href="/filterproduct">Industrial oil</Link>

      <Link href="/filterproduct">Grease</Link>
      <Link href="/filterproduct">Antifreeze and anti-boling</Link>

    </div> */}
  </div> 
    <p><Link to='/coffee' className='liks'>Espresso Coffee</Link></p>
    <p><Link to='/aboutus' className='liks'>About Us</Link></p>
    <p><Link to='/contactus' className='liks'>Contact Us</Link></p>
  </>
)

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const [toggleMenu, setToggleMenu] = useState(false)
  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navbarStyle = {
    backgroundColor: scrollPosition > 0 ? '#fff' : 'transparent',
    height: '65px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '999',
  };
  
  
  
  return (
    <div className="gpt3__navbar  navShadow" style={navbarStyle} >
      <div className="gpt3__navbar-links ">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="GPT3 Logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt3__navbar-wrapper">

          <div className="gpt3__navbar-sign">
            <button type='button'>Eng</button>
          </div>
        
          <div className="gpt3__navbar-menu" >
            {toggleMenu
              ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu &&
              <div className="gpt3__navbar-menu_container " >
                  <Menu />
                <div className="gpt3__navbar-menu_container-links-sign">
                  <button type='button'>Sign up</button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar