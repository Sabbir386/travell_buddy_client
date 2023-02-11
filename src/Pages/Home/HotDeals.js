import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import campaign1 from "../../assets/campaign_FLYDOM0223.jpg";
import campaign2 from "../../assets/campaign_STAYDOM0223.jpg";
import campaign3 from "../../assets/campaign_STAYINT0223BSTAY0223.jpg";

const HotDeals = () => {
  return (
    <div className="p-5">
      <h2 className="text-violet-600 my-4 text-4xl font-bold">Hot Deals</h2>

      <div>
        <Swiper
          spaceBetween={50}
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
            <div src={campaign1} alt="" className="w-full pb-6 rounded-md bg-white flex">
                <div className="p-6">
                <img src={campaign1} alt="" className="w-32 object-cover"/>
                <small className="p-2 bg-sky-300">AMT23</small>
                </div>
                
                <div className="py-6">
                    <h3 className="text-violet-600">On Domestic Flight Booking for Mobile Banking</h3>
                    <p className="text-xs">
                    On base fare, for bKash, Nagad, Rocket, tap & upay payment. Till 28 Feb’23
                    </p>
                    <button className="px-4 py-2 rounded-md bg-violet-600 text-white text-base mt-1">Learn More</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div src={campaign2} alt="" className="w-full pb-6 rounded-md bg-white flex">
                <div className="p-6">
                <img src={campaign2} alt="" className="w-32 object-cover"/>
                <small className="p-2 bg-sky-300">AMT23</small>
                </div>
                
                <div className="py-6">
                    <h3 className="text-violet-600">On Domestic Flight Booking for Mobile Banking</h3>
                    <p className="text-xs">
                    On base fare, for bKash, Nagad, Rocket, tap & upay payment. Till 28 Feb’23
                    </p>
                    <button className="px-4 py-2 rounded-md bg-violet-600 text-white text-base mt-1">Learn More</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div src={campaign3} alt="" className="w-full pb-6 rounded-md bg-white flex">
                <div className="p-6">
                <img src={campaign3} alt="" className="w-32 object-cover"/>
                <small className="p-2 bg-sky-300">AMT23</small>
                </div>
                
                <div className="py-6">
                    <h3 className="text-violet-600">On Domestic Flight Booking for Mobile Banking</h3>
                    <p className="text-xs">
                    On base fare, for bKash, Nagad, Rocket, tap & upay payment. Till 28 Feb’23
                    </p>
                    <button className="px-4 py-2 rounded-md bg-violet-600 text-white text-base mt-1">Learn More</button>
                </div>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
};

export default HotDeals;
