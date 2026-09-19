import React from 'react';
import Header from '../Components/Header/Header';
import Vendor_Product_Upload_Banner from '../Components/VendorUploadedProductBanner/Banner';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const VendorUplodedProductLayout = () => {
    return (
        <div>
            <Header/>
            <Vendor_Product_Upload_Banner/>
            <Outlet/>

            <Footer/>
        </div>
    );
};

export default VendorUplodedProductLayout;