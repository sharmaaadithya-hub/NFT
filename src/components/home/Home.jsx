import React from 'react'
import logo1 from '../../assets/heroimage.png'
import './home.css'
function Home() {
    return (
        <section className='HomeSection'>
            <div className='containerHome container'>
                <div className='left'>
                    {/* left */}
                    <div>

                        <h1 className='leftContentHeader'>Create, Sell & Collect Your Own Creative NFT</h1>
                        <p className='leftContentPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.</p>

                        <div className='left-button'>
                            <button id='button1'>Explore Now</button>
                            <button id='button2'>Sell NFT</button>
                        </div>
                        <div className='left-miniContent'>
                            <div className='minContentDiv1'>
                                <h2>37k+</h2>
                                <p>ArtWorks</p>
                            </div>
                            <div className='minContentDiv2'>
                                <h2>20k+</h2>
                                <p>Artists</p>
                            </div>
                            <div className='minContentDiv3'>
                                <h2>99+</h2>
                                <p>Auctions</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='right'>
                    <div id='div1'><img src={logo1} alt="" /></div>

                </div>
            </div>
        </section>
    )
}

export default Home;