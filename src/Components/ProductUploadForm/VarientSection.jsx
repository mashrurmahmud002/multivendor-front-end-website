import { useContext, useRef, useState } from "react";
import { ProvideContext } from "./ProductContextProvider";
import { useFieldArray, useFormContext } from "react-hook-form";
import { set } from "zod";
import axios from "axios";
import { required } from "zod/mini";
import { CircularProgress } from "@mui/material";
import { X } from "lucide-react";

const VariantsSection = () => {

    const { seVarient, Values, setValues, price, setPrice, size, count , variantOptions, 
       setVariantOptions,
       setCount,   variant_image, setVariant_image,  setSize, stock, setStock, image, setImage } = useContext(ProvideContext);
    const [hasVariants, setHasVariants] = useState(false);
    const [loading, setLoading] = useState(false);
   
    const fileInputRef = useRef(null);

    

    const {register, formState:{errors}, control, getValues, setValue} = useFormContext();
   
    

    const { fields, append, remove } = useFieldArray({
        control,
        name: "varient",
    });

    const [selectedImages, setSelectedImages] = useState([]);
    const [error, setError] = useState("");

    

  


    

    

    const changeId = ()=>{
        const id = count + 1;
        setCount(id);
        return id;
       
       
    }
    
       
    


   
   console.log(variantOptions);
    

    const handleTriggerImage = () => {
        document.getElementById("images_multiple_file").click();


    }

    const handleSelectedImages = async(files, varientIndex) => {
        
        
        
        
        const formdata = new FormData();

        const existingImage = getValues(`varient.${varientIndex}.images`) || [];
        const newUploads = [];

        

        try{
           for(const imgo of files){
               formdata.append("image",imgo);
               setLoading(true);
               const response = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,formdata);
               
               setLoading(false);
               const updateUrl = response?.data?.data?.display_url;

               if(updateUrl){
                  newUploads.push(updateUrl);
               }
               
              setVariantOptions((prev) =>{

                 return  prev.map((item,index)=>{

                    
                      
                        return  varientIndex === index ? {...item, images: [...item.images, updateUrl]} : item
                  })
                    



              }

              
              

                
                  
              
            );

            setValue(`varient.${varientIndex}.images`, [...existingImage, ...newUploads]);
            

               
              
           }

        }catch(error){
            console.log(error);
            
        }


        
    }

    const removeCount = ()=>{
        const id = count - 1;
        setCount(id);
       
    }

   

    

    const handleImageChange = async(e, index)=>{


        console.log("index",index);
        

        

       
        const files = e.target.files;
        
      
        
        

        if(files && files.length > 0){
            
          
        const fileArray = Array.from(files);
        const isTooLarge = fileArray.some((file) => file.size > 5 * 1024 * 1024);
        if (isTooLarge) {
                
           setError("One or more images exceed the 5MB size limit.");
            return;
         }

         
         setSelectedImages(fileArray);

        await handleSelectedImages(fileArray, index);
        
        
        }
        

       

    }
    // Add new variant option
    const handleAddVariant = () => {
       
        setVariantOptions((prev) => [
            ...prev,
           {
            id:changeId(),
            optionName: "Size",
            values: "S, M, L, XL",
            price: "0.00",
            stock: "0",
            color: "",
            images: [],

        },
        ]);
        
    };

    // Update variant field
    const handleChange = (index, e) => {
        const { name, value } = e.target;

        setVariantOptions((prev) =>
            prev.map((item, i) =>
                i === index
                    ? {
                        ...item,
                        [name]: value,
                    }
                    : item
            )
        );
    };

    // Remove variant option
    const handleRemove = (index) => {
        
        removeCount();
        
        setVariantOptions((prev) =>
            prev.filter((_, i) => i !== index)
        );

    };

    const handleRemoveImage = (i, variantIndex)=>{
        

       setVariantOptions((prev) =>
            prev.map((item, index) =>
                index === variantIndex
                    ? {
                          ...item,
                          images: item.images.filter(
                              (_, imageIndex) => i !== imageIndex
                          ),
                      }
                    : item
            )
        );

    }

    return (
        <div className="w-full border border-gray-300 bg-white">

            {/* ================= HEADER ================= */}

            <div className="flex h-[69px] items-center gap-4 bg-black px-6 text-white">

                {/* Icon */}
                <div className="flex h-6 w-6 items-center justify-center border border-white text-[11px] font-bold">
                    F
                </div>

                <div>
                    <h2 className="text-[12px] font-bold tracking-wide">
                        VARIANTS
                    </h2>

                    <p className="mt-1 text-[9px] text-gray-400">
                        Size, Color, Material etc.
                    </p>
                </div>

            </div>

            {/* ================= BODY ================= */}

            <div className="px-5 py-6">

                {/* Checkbox */}

                <label className="flex cursor-pointer items-center gap-3">

                    <input
                        type="checkbox"
                        checked={hasVariants}
                        onChange={(e) => setHasVariants(e.target.checked)}
                        className="peer sr-only"
                    />

                    {/* Custom checkbox */}
                    <span
                        className={`relative flex h-[18px] w-[36px] items-center border border-black transition ${hasVariants ? "bg-black" : "bg-white"
                            }`}
                    >
                        <span
                            className={`absolute h-[14px] w-[14px] bg-white transition-all ${hasVariants ? "left-[19px]" : "left-[1px]"
                                }`}
                        />
                    </span>

                    <span className="text-[13px] text-gray-600">
                        This product has multiple variants
                    </span>

                </label>

                {/* ================= VARIANT FIELDS ================= */}

                {hasVariants && (
                    <div className="mt-4 border-t border-gray-200 pt-5">

                        {/* Column headings */}

                       

                        {/* Variant rows */}

                        <div className="space-y-3">

                            {variantOptions.map((variant, index) => (
                                <div key={index} className="grid grid-cols-3 items-center gap-2">
                                    {/* 1. Option Name */}
                                    <div>
                                        <label>Option</label>
                                        <input
                                            type="text"
                                           
                                            {...register(`varient.${index}.optionName`, { required: true })}
                                           
                                            placeholder="Size"
                                            className="h-[38px] w-full border border-black px-3 text-[12px] text-gray-700 outline-none focus:bg-gray-50"
                                        />
                                        {errors?.variant?.[index]?.optionName && (
                                            <span className="text-xs text-red-500">
                                               {errors.varient?.[index]?.optionName.message || "Option name is required"}
                                            </span>
                                        )}
                                    </div>
                                    

                                    {/* 2. Image Upload */}
                                    <div>
                                        <label>Image Upload</label>
                                        <label  className="group flex h-[38px] cursor-pointer items-center justify-center border relative border-black bg-white transition-colors hover:bg-black">
                                            <svg
                                                
                                                className="h-4 w-4 stroke-2 text-black transition-colors group-hover:text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                />

                                              
                                            </svg>
                                            <input
                                                type="file"
                                                
                                                accept="image/*"
                                                multiple
                                                className="hidden"
                                                onChange={(e)=>handleImageChange(e, index)}
                                              
                                               
                                              />
                                            {error && <span className="text-red-500">{error}</span>}
                                             
                                        </label>

                                        <ul className="flex  gap-2">

                                            

                                            {
                                                variant?.images?.map((image, i) => (
                                                    
                                                   loading ? <CircularProgress size={10} color="secondary" aria-label="Loading…" />: <div className="flex flex-row-reverse">
                                                      <X size={12} onClick={() => handleRemoveImage(i, index)} />
                                                     <img className="w-7 h-7 shadow-lg border-2 p-1" src={image} alt={`image -${i}`} />
                                                   </div>
                                                ))
                                            }
                                        </ul>
                                   

                                    </div>

                                    {/* 3. Values */}
                                    <div>
                                        <label>Values</label>
                                        <input
                                            type="text"
                                           
                                            {...register(`varient.${index}.valuess`, { required: true })}
                                           
                                            placeholder="S, M, L, XL"
                                            className="h-[38px] w-full border border-black px-3 text-[12px] text-gray-700 outline-none focus:bg-gray-50"
                                        />
                                        {
                                            errors?.varient?.[index] && (
                                                <span className="text-xs text-red-500">
                                                    {errors.varient?.[index].valuess?.message || "values is required"}
                                                </span>
                                            )
                                        }
                                    </div>

                                    {/* 4. Price */}
                                    <div>
                                        <label>Price</label>
                                        <div className="flex h-[38px] border border-black">
                                            <span className="flex w-[25px] items-center justify-center border-r border-gray-300 text-[11px] text-gray-400">
                                                $
                                            </span>
                                            <input
                                                type="number"
                                                
                                                {...register(`varient.${index}.price`, { required: true })}
                                                
                                                className="w-full min-w-0 px-2 text-[12px] outline-none"
                                            />
                                           
                                        </div>
                                         {
                                                errors?.varient?.[index]?.price && (
                                                    <span className="text-xs text-red-500">
                                                        {errors?.varient?.[index]?.price?.message || "price is required"}
                                                    </span>
                                                )
                                            }
                                    </div>

                                    {/* 5. Stock */}
                                    <div>
                                        <label>Stock</label>
                                        <input
                                            type="number"
                                           
                                            {...register(`varient.${index}.stock`, { required: true })}
                                          
                                            className="h-[38px] w-full border border-black px-3 text-[12px] outline-none"
                                        />
                                        {
                                            errors?.varient?.[index]?.stock && (
                                                <span className="text-xs text-red-500">
                                                  {errors.varient?.[index].stock.message || "stock is required"}
                                                </span>
                                            )
                                        }
                                    </div>

                                    {/* 6. Remove */}
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => handleRemove(index)}
                                            className="mt-5 flex h-[38px] w-[38px] items-center justify-center border border-black text-[18px] text-gray-700 transition hover:bg-black hover:text-white"
                                        >
                                            ×
                                        </button>
                                    </div>
                                </div>
                            ))}

                        </div>

                        {/* Add Variant Option */}

                        <button
                            type="button"
                            onClick={handleAddVariant}
                            className="mt-5 border border-black px-5 py-3 text-[10px] font-bold tracking-[1px] text-black transition hover:bg-black hover:text-white"
                        >
                            + ADD VARIANT OPTION
                        </button>

                    </div>
                )}

            </div>
        </div>
    );
};

export default VariantsSection;