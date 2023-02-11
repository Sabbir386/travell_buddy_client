import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper";
import "swiper/css/navigation";
import offer1 from '../../assets/emi-lg.jpg'
import offer2 from '../../assets/homepage-lg-int-hotel.png'
import offer3 from '../../assets/img_350915af-a1be-4768-853c-24eb851b7098.png'


const Offer = () => {
    return (
        <div className='p-5'>
            <Swiper
      spaceBetween={50}
    //   slidesPerView={2}
      navigation={true}
      modules={[Navigation]}
      loop={true}
      breakpoints={{
        576: {
          // width: 576,
          slidesPerView: 1,
        },
        768: {
          // width: 768,
          slidesPerView: 2,
        },
      }}
    >
      <SwiperSlide>
            <img src={offer1} alt="" className='w-full h-40 rounded-md object-cover'/>
      </SwiperSlide>
      <SwiperSlide>
            <img src={offer2} alt="" className='w-full h-40 rounded-md object-cover'/>
      </SwiperSlide>
      <SwiperSlide>
            <img src={offer3} alt="" className='w-full h-40 rounded-md object-cover'/>
      </SwiperSlide>
      
    </Swiper>
        </div>
    );
};

export default Offer;