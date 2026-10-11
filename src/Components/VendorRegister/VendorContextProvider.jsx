import React, { createContext, useState } from 'react';




export const vendorContext = createContext();

const VendorContextProvider = ({children}) => {

    const [countryName, setCountryName] = useState('');
    const [activeStep, setActiveStep] = useState(1);

    
    const handleNext = () => {
        
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };

    const info ={
        countryName,
        setCountryName,
        activeStep,
        setActiveStep,
        handleNext
    }
    return <vendorContext.Provider value={info}>
        {children}
    </vendorContext.Provider>;
};

export default VendorContextProvider;