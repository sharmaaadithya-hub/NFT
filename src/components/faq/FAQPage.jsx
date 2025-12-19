import React from 'react'
import { useState } from 'react'
import './FAQPage.css'
function FAQ() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }
    return setSelected(i);
  }
  return (
    <section className='faqSection'>
      <div className='FaqContainer container'>
        <h1 className='faqHeader'>Freaquently Asked <br />Question</h1>
        <p className='faqPara'>Wanna Ask Something?</p>
        <div className='FaqWrapper'>
          <div className='leftFaqList'>
            {
              data.map((item, i) => {
                return (
                  <div className='FaqItem'>
                    <div className='FaqTitle' onClick={() => toggle(i)}><p>{item.Question}</p> <p>{selected == i ? "-" : "+"}</p></div>
                    <div className={selected == i ? "FaqAnsShow" : "FaqAns"}><p>{item.Answer}</p></div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}
const data = [
  {
    Question: "Lorem ipsum ipsum ?",
    Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip "
  },
  {
    Question: "Lorem ipsum ipsum ?",
    Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip "
  },
  {
    Question: "Lorem ipsum ipsum ?",
    Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip "
  }, {
    Question: "Lorem ipsum ipsum ?",
    Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip "
  },
  {
    Question: "Lorem ipsum ipsum ?",
    Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip "
  },
  {
    Question: "Lorem ipsum ipsum ?",
    Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip "
  }
]
export default FAQ