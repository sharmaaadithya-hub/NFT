import React from 'react'
import './footer.css'
import Youtube from '../../assets/youtube.png'
import discord from '../../assets/Vector.png'
import Instagram from '../../assets/Vector (1).png'
function Footer() {
  return (
    <>
      <footer>
        <div className='footer container'>
          <div className='footerContentDesc'>
            <h2>Psycho <span className='footerBold'>Art</span></h2>
            <p>The best NFT marketplace website in <br />the world and feel your experience in <br /> selling or buy our work</p>
          </div>
          <div className='footerContent'>
            <h2>About</h2>
            <ul>
              <li><a href="">Product</a></li>
              <li><a href="">Resource</a></li>
              <li><a href="">Term & Condition</a></li>
              <li><a href="">FAQ</a></li>
            </ul>
          </div>
          <div className='footerContent'>
            <h2>Company</h2>
            <ul>
              <li><a href="">Our Team</a></li>
              <li><a href="">Partner With Us</a></li>
              <li><a href="">Privacy & Policy</a></li>
              <li><a href="">Features</a></li>
            </ul>
          </div>
          <div className='footerContent'>
            <h2>Contact</h2>
            <ul>
              <li><a href="tel:+012 3456789">+012 3456789</a></li>
              <li><a href="mailto:adorableprogrammer@gmail.com" >adorableprogrammer@gmail.com </a></li>
              <li>
                <div className='footerSocialMediaIcon'>
                  <a href=""><img src={Youtube} alt="" /></a>
                  <a href=""><img src={discord} alt="" /></a>
                  <a href=""><img src={Instagram} alt="" /></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='footerBottomText'><p>Created by <span className='footerBottomBold'>Zarror</span>  | All Right Reserved!</p></div>
      </footer>
    </>
  )
}

export default Footer