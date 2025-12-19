import React from 'react'
import './TopCreator.css'
function TopCreator() {
    return (
        <section className='topCreatorSection'>
            <div className='TopCreatorContainer container'>
                <h1 className='topCreatorHeader'>Top Creator</h1>
                <p className='topCreatorPara'>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</p>

                <div className='TopCreatorcards'>
                    <div className='TopCreatorcard1'>
                        <div className='topimg1'></div>
                        <div className='topRoundImg1'></div>
                        <div className='TopCreatorCardContent'>
                            <h1>John Wick</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</p>
                        </div>
                        <button>+Follow</button>
                    </div>
                    {/* TopCreatorcard2 */}
                    <div className='TopCreatorcard2'>
                        <div className='topimg2'></div>
                        <div className='topRoundImg2'></div>
                        <div className='TopCreatorCardContent'>
                            <h1>John Wick</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</p>
                        </div>
                        <button>+Followed</button>
                    </div>
                    {/* TopCreatorcard3 */}
                    <div className='TopCreatorcard1'>
                        <div className='topimg3'></div>
                        <div className='topRoundImg3'></div>
                        <div className='TopCreatorCardContent'>
                            <h1>John Wick</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</p>
                        </div>
                        <button>+Follow</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopCreator