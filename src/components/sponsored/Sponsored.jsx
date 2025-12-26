import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import logo1 from "../../assets/Logo_of_Blockchain.io logo.svg"
import logo2 from "../../assets/Ethereum logo copy.svg"
import logo3 from "../../assets/Binance_logo logo.svg"
// Import Swiper styles
import 'swiper/css';
import   './sponsored.css'
import { Autoplay } from 'swiper/modules';
const SwiperComponent = () => {
 

const [x , setx] = useState(3)
if (window.innerWidth < 1024) {
  setx(2)
  console.log(x);

}

  return (
    <div>
      <Swiper className="logo-container"
      modules={[Autoplay]}
      slidesPerView={2}
      spaceBetween={50}
      breakpoints={{
        576: {
          slidesPerView: 2,
          spaceBetween: 4,
        },
      
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
    
        }}

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
          delay: 1000, 
          disableOnInteraction: false, 
          pauseOnMouseEnter: true, 
        }}
        loop={true}
    >
        <SwiperSlide className='.swiper-content'><img src={logo1} alt="" /></SwiperSlide>
        <SwiperSlide className='.swiper-content'><img src={logo2} alt="" /></SwiperSlide>
        <SwiperSlide className='.swiper-content'><img src={logo3} alt="" /></SwiperSlide>
        <SwiperSlide className='.swiper-content'><img src={logo3} alt="" /></SwiperSlide>

      ...
    </Swiper>
    </div>
  );
};

export default SwiperComponent;
