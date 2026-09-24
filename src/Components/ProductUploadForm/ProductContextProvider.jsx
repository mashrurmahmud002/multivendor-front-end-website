import React, { createContext, useState } from 'react';










 export const ProvideContext = createContext()

const ProductContextProvider = ({children}) => {
    const [title , setTitle] = useState('');
    const [sale, setSale] = useState('');
    const [description, setDescription] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [compareSale, setCompareSale] = useState(0);
    const [cost, setCost] = useState(0);
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [tax, setTax] = useState(0);
    const [quantity, setquantity] = useState(0);
    const [stock, setStock] = useState(0);
    const [size, setSize] = useState('');
    const [Values, setValues] = useState([]);
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [lowstock, setLowStock] = useState(5);
    const [allowBackdors , setallowBackdors] = useState(false);
    const [trackInventory, setTrackInventory] = useState(false);
    const[tagn, setTag] = useState([]);
    const [generateSKu, setGenerateSKu] = useState('');
    const [shippingClass, setShippingClass] = useState("Standard");
    const [weight, setWeight] = useState(0);
    const [weightUnit, setWeightUnit]= useState("KG");
    const [brand, setBrand] = useState('');

  
    const [varient, seVarient] = useState([
    {
      optionName: "Size",
      values: "S, M, L, XL",
      price: "0.00",
      stock: "0",
      color: "",
      image: image,
    
    },
  ]);
    

    

   const balance = {
       title,
       setTitle,
       sale,
       setSale,
       description,
       shortDescription,
       setDescription,
       setShortDescription,
       compareSale,
       setCompareSale,
       cost,
       setCost,
       length,
       setLength,
       width,
       setWidth,
       height,
       setHeight,
       tax,
       setTax,
       quantity,
       setquantity,
       stock,
       setStock,
       price,
       setPrice,
       image,
       setImage,
       varient,
       seVarient,
       size,
       setSize,
       Values,
       setValues,
       lowstock,
       setLowStock,
       allowBackdors,
       setallowBackdors,
       trackInventory,
       setTrackInventory,
       setTag,
       tagn,
       generateSKu,
       setGenerateSKu,
       shippingClass,
       setShippingClass,
       weight,
       setWeight,
       weightUnit,
       setWeightUnit,
       brand,
       setBrand
   }
   
    return <ProvideContext.Provider value={balance}>
        {children}

    </ProvideContext.Provider>
};

export default ProductContextProvider;