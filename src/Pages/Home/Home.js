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
            <Offer></Offer>
            <HotDeals></HotDeals>
        </div>
    );
};

export default Home;