import React, { useContext } from 'react';
import NewArrivalsHeroBanner from './NewArrivalsBanner';
import FeaturedDrop from './FeaturedDrop';
import Shop_category from '../../shop-Category/Shop_category';
import NewArrivalCard from './NewArrivalCard';


const NewArrivals = () => {
    
    return (
        <div className='mx-auto container'>

            <NewArrivalsHeroBanner/>
            <FeaturedDrop/>
            <Shop_category/>
            <NewArrivalCard/>
            
        </div>
    );
};

export default NewArrivals;