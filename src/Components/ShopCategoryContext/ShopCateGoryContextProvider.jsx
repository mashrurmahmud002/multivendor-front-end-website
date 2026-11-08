import React, { createContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';







const ShopCateGoryContextProvider = ({children}) => {

    const [category_name, setCategory_name] = useState('all');
    const [page, setPage] = useState(1);

    const shopInfo ={
        category_name,
        setCategory_name,
        page,
        setPage
    }


    return <ShopContext.Provider value={shopInfo}>
        {children}
    </ShopContext.Provider>;
};

export default ShopCateGoryContextProvider;