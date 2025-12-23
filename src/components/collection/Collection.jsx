import React from 'react'
import './Collection.css'
function Collection() {
  return (
    <>
      <section className='collectionSection'>
        <div className="collectionContainer container">
          <h1 className='collectionHeader'>Collection</h1>
          <p className='collectionPara'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
          <div className='collectionNav'>
            <button id='btn1'>Art</button>
            <button id='btn2'>Sport</button>
            <button id='btn3'>Photograhy</button>
            <button id='btn4'>Pattern</button>
          </div>
          <div className='collectionCard'>
            {/* card1 */}
            <div className='card'>
              <div className='cardImg1'>
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
            {/* card2 */}
            <div className='card'>
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
            <div className='card'>
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
              <button className='cardBtn'>Place a bid</button>
            </div>
            {/* card4 */}
            <div className='card'>
              <div className='cardImg4'>
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
            {/* card5*/}
            <div className='card'>
              <div className='cardImg5'>
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
            {/* card6*/}
            <div className='card'>
              <div className='cardImg6'>
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
            {/* card7*/}
            <div className='card'>
              <div className='cardImg7'>
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
            {/* card8*/}
            <div className='card'>
              <div className='cardImg8'>
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
            {/* card9*/}
            <div className='card'>
              <div className='cardImg9'>
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
          </div>
        </div>
      </section>
    </>
  )
}
export default Collection