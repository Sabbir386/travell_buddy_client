import React from 'react';
import Banner from './Banner';
import HotDeals from './HotDeals';
import Offer from './Offer';
import Search from './Search';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <HotDeals></HotDeals>
            <Offer></Offer>
            
        </div>
    );
};

export default Home;