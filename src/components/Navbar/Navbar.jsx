import React from 'react'
import './Navbar.css'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
const Navbar = () => {

  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    console.log(isOpen);
    setOpen(!isOpen);
  };

  return (

    <>
      <header>
        <div className="navContainer container">
          <h1 className="logo"  ><span className='firstWord'>Pysco</span><a href="/logo">Art</a></h1>
          <div className='search'>
            <form action=""><input id='text' type="text" placeholder=" Search items and collections" name='text' />
            </form>
          </div>
          <div className='navigationBar' >

            <ul className={isOpen ? "menuMobile" : "nav-links"}>

              {isOpen && <div className='closeIcon'><button onClick={toggleMenu}><i className='closeImage' class="fa-solid fa-xmark"></i></button></div>

              }
              <li className='collection'><a href="">Collection</a></li>
              <li><a href="">Feature</a></li>
              <li><a href="">Faq</a></li>
            </ul>

            <div className='navButton'><button id="connectbtn">Select Wallet</button></div>
          </div>

          <div className="hamburger">
            <button className='navHamburger' onClick={toggleMenu}> <i className='humbergerIcon' class="fa-solid fa-bars"></i></button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar