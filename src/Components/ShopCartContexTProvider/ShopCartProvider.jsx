import React, { useState } from 'react';
import ShopCartContext from '../../Context/ShopCartContext';

const ShopCartProvider = ({children}) => {
    const [cartproducts, setCartProducts] = useState([]);

    const info = {
        cartproducts,
        setCartProducts
    }
    return <ShopCartContext.Provider value={info}>
        {children}
    </ShopCartContext.Provider>;
};

export default ShopCartProvider;