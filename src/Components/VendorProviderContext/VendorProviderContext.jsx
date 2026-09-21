






import React, { createContext, useState } from 'react';




export const VendorContext = createContext();

const VendorProviderContext = ({children}) => {
    const [activeState, setActiveState] = useState(1);
    return <VendorContext.Provider value={{activeState, setActiveState}}>
        {children}
    </VendorContext.Provider>
};

export default VendorProviderContext;