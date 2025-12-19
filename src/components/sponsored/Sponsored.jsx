import React from 'react'
import logo1 from '../../assets/Logo_of_Blockchain.io logo.svg'
import logo2 from '../../assets/Ethereum logo.svg'
import logo3 from '../../assets/Binance_logo logo.svg'
import './sponsored.css'
function Sponsored() {
  return (
    <section className='SponsoredSection'>
      <div className='sponsoredContainer container'>
        <img id='sponsoredImg1' src={logo3} alt="" />
        <img id='sponsoredImg2' src={logo2} alt="" />
        <img id='sponsoredImg3' src={logo1} alt="" />
      </div>
    </section>
  )
}

export default Sponsored;       