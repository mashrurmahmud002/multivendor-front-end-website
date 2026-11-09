import React from 'react';
import ShopCartBanner from './ShopCartBanner';
import ShoppingCartItems from './ShopCartItems';
import OrderSummary from './OrderSummery';

const ShopCart = () => {
    return (
        <div className='w-full'>
           
            <ShopCartBanner/>
            <div className='flex w-full gap-3'>
               <div className='w-[70%]'>
                 <ShoppingCartItems/>
               </div>
               <div className='w-[30%]'>
                 <OrderSummary/>
               </div>
            </div>
        </div>
    );
};

export default ShopCart;