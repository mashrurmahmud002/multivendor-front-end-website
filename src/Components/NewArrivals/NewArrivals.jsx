import React from 'react';
import NewArrivalsHeroBanner from './NewArrivalsBanner';
import FeaturedDrop from './FeaturedDrop';

const NewArrivals = () => {
    return (
        <div className='mx-auto container'>

            <NewArrivalsHeroBanner/>
            <FeaturedDrop/>
            
        </div>
    );
};

export default NewArrivals;