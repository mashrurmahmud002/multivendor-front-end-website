import React from 'react';

import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import VendorBanner from '../Components/VendorBanner/VendorBanner';
import VendorSteps from '../Components/Vendor_Steps/Vendor_Steps';
import VendorInfoSidebar from '../Components/VendorInfoSideBar/VendorInfoSideBar';

const VendorformLayout = () => {
    return (
        <div>
            <Header/>
            <VendorBanner/>
            <VendorSteps/>
            <section className='flex gap-2'>
                <div className='w-[60%]'>
                    <Outlet/>
                </div>
                <div className='w-[20%]'>
                    <VendorInfoSidebar/>
                </div>
            </section>
            
        </div>
    );
};

export default VendorformLayout;