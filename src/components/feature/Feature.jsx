import React from 'react'
import './Feature.css'
function Feature() {
  return (
    <section className='featureSection'>
      <div className='FeatureContainer container'>

        <h1 className='featureHeader'>Featured Artworks</h1>
        <p className='featurePara'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>

        <div className='FeatureCard'>
          {/* card1 */}
          <div className='cards'>
            <div className='FeatureCardImg1'>
            </div>
            <div className='FeatureCardData'>
              <div className='data1'>
                <p>@johny</p>
                <h1>Yellow Painting</h1>
              </div>
              <div className='data2'>
                <p>Current Bid</p>
                <h1>0.005 ETH</h1>
              </div>
            </div>
            <button className='cardBtn'>Place a bid</button>
          </div>
          {/* card2 */}
          <div className='cards'>
            <div className='cardImg2'>
            </div>
            <div className='cardData'>
              <div className='data1'>
                <p>@johny</p>
                <h1>Yellow Painting</h1>
              </div>
              <div className='data2'>
                <p>Current Bid</p>
                <h1>0.005 ETH</h1>
              </div>
            </div>
            <button className='cardBtn'>Place a bid</button>
          </div>
          {/* card3*/}
          <div className='cards3'>
            <div className='cardImg3'>
            </div>
            <div className='cardData'>
              <div className='data1'>
                <p>@johny</p>
                <h1>Yellow Painting</h1>
              </div>
              <div className='data2'>
                <p>Current Bid</p>
                <h1>0.005 ETH</h1>
              </div>
            </div>
            <button className='cardBtn5'>Place a bid</button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Feature