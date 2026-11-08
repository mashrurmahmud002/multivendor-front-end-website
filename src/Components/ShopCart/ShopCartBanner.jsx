import React from 'react';
import ShoppingCartHeader from './ShopCartHeader';



const ShopCartBanner = () => {
    return (
        <div>
            <ShoppingCartHeader
            totalItems = {3}
            subtotal = {120}
            shippingThreshold = {100}
            savedAmount = {12}
            />
        </div>
    );
};

export default ShopCartBanner;