import React from 'react';
import Banner from './Banner';
import HotDeals from './HotDeals';
import Offer from './Offer';
import Search from './Search';
import Service from './Service';
import MainHotel from './MainHotel';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <HotDeals></HotDeals>
            <MainHotel></MainHotel>
            <Offer></Offer>
            
        </div>
    );
};

export default Home;