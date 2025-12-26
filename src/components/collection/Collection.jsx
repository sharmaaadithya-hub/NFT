import React from 'react'
import { useState } from 'react';
import './Collection.css'
import Col1 from "../../assets/Rectangle 23.png"
import Col2 from "../../assets/collection2.png"
import Col3 from "../../assets/collection3.png"
import Col4 from "../../assets/collection4.png"
import Col5 from "../../assets/collection5.png"
import Col6 from "../../assets/collection6.png"
import Col7 from "../../assets/collection7.png"
import Col8 from "../../assets/collection8.png"
import Col9 from "../../assets/collection9.png"


function Collection() {

  const cardsData = [
    {
      id: 1,
      img: Col1,
      name: "Yellow Painting",
      currentBidTitle: "Current Bid",
      currentBid: "0.005 ETH",
      username: "@johny",
      btnName: "Place a bid",
      category: "Art"
    },
    {
      id: 2,
      img: Col2,
      name: "Yellow Painting",
      currentBidTitle: "Current Bid",
      currentBid: "0.005 ETH",
      username: "@johny",
      btnName: "Place a bid",
      category: "Art"
    },
    {
      id: 3,
      img: Col3,
      name: "Yellow Painting",
      currentBidTitle: "Current Bid",
      currentBid: "0.005 ETH",
      username: "@johny",
      btnName: "Place a bid",
      category: "Art"
    }, {
      id: 4,
      img: Col4,
      name: "Yellow Painting",
      currentBidTitle: "Current Bid",
      currentBid: "0.005 ETH",
      username: "@johny",
      btnName: "Place a bid",
      category: "Sport"
    },
    {
      id: 5,
      img: Col5,
      name: "Yellow Painting",
      currentBidTitle: "Current Bid",
      currentBid: "0.005 ETH",
      username: "@johny",
      btnName: "Place a bid",
      category: "Sport"
    },
    {
      id: 6,
      img: Col6,
      name: "Yellow Painting",
      currentBidTitle: "Current Bid",
      currentBid: "0.005 ETH",
      username: "@johny",
      btnName: "Place a bid",
      category: "Pattern"
    },
    {
      id: 7,
      img: Col7,
      name: "Yellow Painting",
      currentBidTitle: "Current Bid",
      currentBid: "0.005 ETH",
      username: "@johny",
      btnName: "Place a bid",
      category: "Photgraphy"
    },
    {
      id: 8,
      img: Col8,
      name: "Yellow Painting",
      currentBidTitle: "Current Bid",
      currentBid: "0.005 ETH",
      username: "@johny",
      btnName: "Place a bid",
      category: "Photgraphy"
    },
    {
      id: 9,
      img: Col9,
      name: "Yellow Painting",
      currentBidTitle: "Current Bid",
      currentBid: "0.005 ETH",
      username: "@johny",
      btnName: "Place a bid",
      category: "Pattern"
    },

  ]
  const [selectCategory, setSelectCategory] = useState("Sport");

  const filterCards = selectCategory === "all" ? cardsData : cardsData.filter((card) => card.category == selectCategory)


  return (

    <>
      <section className='collectionSection'>
        <div className="collectionContainer container">
          <h1 className='collectionHeader'>Collection</h1>
          <p className='collectionPara'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
          <div className='collectionNav'>
            <button id='btn1' onClick={() => setSelectCategory("Art")}>Art</button>
            <button id='btn2' onClick={() => setSelectCategory("Sport")}>Sport</button>
            <button id='btn3' onClick={() => setSelectCategory("Photgraphy")}>Photograhy</button>
            <button id='btn4' onClick={() => setSelectCategory("Pattern")}>Pattern</button>
          </div>
          <div className='collectionCard'>
            {
              filterCards.map((cardsData) => {
                return (
                  <div className='card'>
                    <div>
                      <img className='cardImg1' src={cardsData.img} alt="" />
                    </div>
                    <div className='cardData'>
                      <div className='data1'>
                        <p>{cardsData.username}</p>
                        <h1>{cardsData.name}</h1>
                      </div>
                      <div className='data2'>
                        <p>{cardsData.currentBidTitle}</p>
                        <h1>{cardsData.currentBid}</h1>
                      </div>
                    </div>
                    <button className='cardBtn'>{cardsData.btnName}</button>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )



}

export default Collection