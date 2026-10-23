import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const ShopLayOut = () => {
    return (
        <div>
            <Header/>
            <main className=' container mx-auto'>
                 <Outlet></Outlet> 
            </main>
            
            
            <Footer/>
        </div>
    );
};

export default ShopLayOut;