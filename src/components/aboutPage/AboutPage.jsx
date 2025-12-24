import React from 'react'
import './aboutPage.css'
function About() {
  return (<>
    <section className='aboutSection'>
      <div className='aboutContainer container'>
        <h1 className='aboutHeader'>About Us</h1>
        <p className='aboutPara'>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit.</p>
        <div className='AboutData'>
          <div className='AboutDataImage'> </div>
          <div className='AboutDatapara'><h1>Get Popular NFT</h1>
            <div className='paragraph'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p></div>
            <button className='aboutBtn'>Show More</button></div>
        </div>
      </div>
    </section>
  </>
  )
}

export default About