import React from 'react';
import Banner from '../Banner/Banner';
import TopSeller from '../TopSeller/TopSeller';
import MostWanted from '../MostWnatedProducts/MostWantedProducts';
import HowItWorks from '../HowITWorks/HowITWorks';
import OpenStore from '../Opentore/OpenStore';
import Newsletter from '../NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>

            <Banner/>
            <TopSeller/>
            <MostWanted/>
            <HowItWorks/>
            <OpenStore/>
            <Newsletter/>
            
        </div>
    );
};

export default Home;