import React from 'react';
import Header from '../Components/Header/Header';
import FlashSale from '../Components/FlashSale/FlashSale';
import { Outlet } from 'react-router-dom';
import FlashAlert from '../Components/FlashAlert/FlashAlert';
import Footer from '../Components/Footer/Footer';

const DealsLayOut = () => {
    return (
        <div>
            <Header/>
            <FlashSale/>
            <main>
                <Outlet/>
            </main>
            <FlashAlert/>
            <Footer/>
            

        </div>
    );
};

export default DealsLayOut;