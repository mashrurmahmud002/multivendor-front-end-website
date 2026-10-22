import React, { createContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';







const ShopCateGoryContextProvider = ({children}) => {

    const [category_name, setCategory_name] = useState({});

    const shopInfo ={
        category_name,
        setCategory_name
    }


    return <ShopContext.Provider value={shopInfo}>
        {children}
    </ShopContext.Provider>;
};

export default ShopCateGoryContextProvider;