
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import VendorBanner from '../Components/VendorBanner/VendorBanner';

import VendorInfoSidebar from '../Components/VendorInfoSideBar/VendorInfoSideBar';
import { useState } from 'react';

const VendorformLayout = () => {
    
    return (
        <div>
            <Header/>
            <VendorBanner/>
           
            <section className='mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 sm:px-6 lg:flex-row lg:gap-10 lg:px-8'>
                <div className='w-full lg:max-w-[720px] lg:flex-1'>
                    <Outlet/>
                </div>
                <div className='w-full shrink-0 border-t border-gray-200 lg:w-[320px] lg:border-t-0 lg:border-l lg:pl-10'>
                    <VendorInfoSidebar/>
                </div>
            </section>
            
        </div>
    );
};

export default VendorformLayout;