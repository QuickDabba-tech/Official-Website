import {React, useState} from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Menu = () => (
  <>
  <li><NavLink to="/" className="navlink">Home</NavLink></li>
  <li><NavLink to="/order" className="navlink">How To Order</NavLink></li>
  <li><NavLink to="/aboutus" className="navlink">About Us</NavLink></li>
  <li><NavLink to="/contactus" className="navlink">Contact Us</NavLink></li>
  </>
 )

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="src/assets/quick.png" alt="logo" height={90} />
      </div>
      <ul className="nav-links">
       <Menu /> 
      </ul>
      <div className="nav-buttons">
        <button className="become-chef">
          <NavLink to="/chef" className="navlink">Become Home Chef</NavLink>
        </button>
        <button className="become-chef">
          <NavLink to="/delivery" className="navlink">Become Delivery Partner</NavLink>
        </button>
      </div>
      <div className='nav-menu'>
       {toggleMenu ? 
       <RiCloseLine color='#ed303c' size={27} onClick={()=> setToggleMenu(false)}/>
       :<RiMenu3Line color='#ed303c' size={27} onClick={()=> setToggleMenu(true)}/> 
       }  
      {toggleMenu && (
         <div className='nav-menu_container scale-up-center'>
          <div className='nav-menu_container-links'>
            <Menu/>
            <div className='nav-menu_container-links-buttons'>
            <button>
          <NavLink to="/chef" className="navlink">Become Home Chef</NavLink>
        </button>
        <button>
          <NavLink to="/delivery" className="navlink">Become Delivery Partner</NavLink>
        </button>
            </div>
          </div>
         </div>
      )}
      </div>  
    </nav>
  );
};

export default Navbar;