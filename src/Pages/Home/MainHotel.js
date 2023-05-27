import React from 'react';
import Saymen from '../../../src/assets/saymen.jpg'
import { Link } from 'react-router-dom';
const MainHotel = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-5">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                    <img src={Saymen} alt="" className='w-full h-96 rounded-md'/>
                </div>
                <div>
                    <h4 className='text-5xl text-violet-800 font-extrabold font-dancingScript my-4'>Sayeman Beach Resort</h4>
                    <p className='mb-4 text-sm'>
                    In Cox’s Bazar-Bangladesh, After fifty years of glorious past, Sayeman Beach Resort revives its famed legacy of comfort, elegance and impeccable service. An eminent landmark constructed in 1964, this legendary first private hotel in Cox’s Bazar is reborn, infusing modern sophistication into this vintage-chic, iconic hotel at a new beachfront location of Marine Drive, Kolatoli, Cox’s Bazar.
                    </p>
                    <p className='mb-4 text-sm'>
                    With its richly historic past, the Hotel Sayeman now fully becomes a part of the exciting and rapidly changing present with the addition of a modern, elegant luxury ocean front hotel in Cox’s Bazar. The beauty of Cox’s Bazar – the climate, the panoramic ocean views, the sandy beaches, plus the rich culture and history along with the warmth of the sun – is what attracts people here. And the Sayeman Beach Resort provides you exactly just that with extraordinary comfort, luxury and services.
                    </p>
                    <Link to={'/hotels/645fee13dd8f3b0094149f28'} className="inline-block px-4 py-2 rounded-md bg-violet-800 text-white text-base mt-4">Explore Saymen</Link>
                </div>
            </div>
        </div>
    );
};

export default MainHotel;