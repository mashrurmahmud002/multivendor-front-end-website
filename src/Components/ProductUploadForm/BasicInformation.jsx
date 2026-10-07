import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ProvideContext } from "./ProductContextProvider";
import { useFormContext } from "react-hook-form";

const BasicInformation = ({categories, subcategory, setCategories, setSubCategory}) => {
  
  const{title , setTitle,tags, setTags, tagn, setTag,generateSKu, setGenerateSKu,category, setCategory} = useContext(ProvideContext);
  const {register, formState:{errors}, watch, setValue} = useFormContext({})
 
  const [tagInput, setTagInput] = useState("");
  
  
  const [electronics] = useState(["Audio", "Cameras", "Computers", "Phones", "Wearables", "Other"]);
  const [fashion_apparel] = useState(["Apparel", "Shoes", "Accessories", "Other"]);
  const [homeandGardern] = useState(["Furniture", "Decor", "Kitchen", "Bedding", "Garden"]);
  const [sportsOutdoors] = useState(["Running", "Cycling", "Yoga", "Camping", "Water Sports"]);
  const [beauty_wellness] = useState(["Skincare", "Haircare", "Supplements", "Fragrance"]);
  const [food_drink] = useState(["Coffee & Tea", "Snacks", "Condiments", "Beverages"]);
  const [bookMedia] = useState(["Books", "Music", "Film", "Games"]);
  const [other] = useState(['general', "select-sub-categories"]);
 


   const subCategoryLookup = {
    fashion_apparel: fashion_apparel,
    "home-garden": homeandGardern,
    "sports-outdoors": sportsOutdoors,
    "beauty-wellness": beauty_wellness,
    "food-drink": food_drink,
    "book-media": bookMedia,
    electronics: electronics,
    other: other,
  };
  
  const selectedCategory = watch("category");
   const currentSubCategories = subCategoryLookup[selectedCategory] || [];

   const selectedTag = watch('tags');

   

   


  useEffect(()=>{
    setValue('subcategory', '',{
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    });
  },[selectedCategory, setValue]);


  useState(()=>{
    setValue('tags', [],{
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    });
  })


  
  const handleAddTag = () => {
    
    const tag = tagInput.trim();

    if (!tag) return;

    setTags((prev) => [...prev, tag]);
    setTagInput("");
  };


  const handleGenerateSku = async()=>{
    try{
         const  response = await axios.get('http://localhost:5000/api/generate-sku');
         
        setGenerateSKu(response.data.sku);
    }catch(err){
        
    }
     

  }

  const handleCategory = (e)=>{
    setCategory(e.target.value);

  }
   const handleSubCategory = (e)=>{
    setSubCategory(e);
    
  }


  const habndleSubCategoryChange = (e)=>{
    

    const trimo = e.trim()

    
    setCategory(trimo);

   


  }


  

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <section className="w-full border border-black bg-white">
      {/* Header */}
      <div className="flex h-[55px] items-center gap-4 bg-black px-6">
        <div className="flex h-6 w-6 items-center justify-center border border-white text-xs font-bold text-white">
          B
        </div>

        <h2 className="text-[11px] font-bold tracking-[0.12em] text-white">
          BASIC INFORMATION
        </h2>
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        {/* Product Title */}
        <div>
          <label className="mb-2 block text-[10px] font-bold tracking-[0.15em] text-black">
            PRODUCT TITLE<span className="text-red-600">*</span>
          </label>

          <input
            type="text"
            
            {...register("title", {required: "Title is required",
              onChange: (e) => setTitle(e.target.value),
            })}
            placeholder="e.g. Ceramic Pour-Over Coffee Set"
            className="h-[43px] w-full border border-black px-4 text-sm outline-none placeholder:text-[#9ca3af] focus:ring-1 focus:ring-black"
          />
          {
            errors.title && <p className="text-red-600">{errors.title.message}</p>
          }
        </div>

        {/* SKU + Brand */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* SKU */}
          <div>
            <label className="mb-2 block text-[10px] font-bold tracking-[0.15em]">
              SKU
            </label>

            <div className="flex gap-2">
              <input
                type="text"
                value={generateSKu}
                
                className="h-[43px] w-full max-w-[173px] border border-black px-4 text-xs text-[#9ca3af] outline-none"
              />


              <button
                onClick={handleGenerateSku}
                type="button"
                className="h-[43px] w-[48px] border border-black bg-white text-[9px] font-bold tracking-wider transition hover:bg-black hover:text-white"
              >
                GEN
              </button>
            </div>
          </div>

          {/* Brand */}
          <div>
            <label className="mb-2 block text-[10px] font-bold tracking-[0.15em]">
              BRAND
            </label>

            <input
              type="text"
              {...register("brand", {required: "Brand is required"})}
              placeholder="Brand or manufacturer"
              className="h-[43px] w-full border border-black px-4 text-sm outline-none placeholder:text-[#9ca3af] focus:ring-1 focus:ring-black"
            />
            {
              errors.brand && <p className="text-red-600">{errors.brand.message}</p>
            }
          </div>
        </div>

        {/* Category + Sub Category */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Category */}
          <div>
            <label className="mb-2 block text-[10px] font-bold tracking-[0.15em]">
              CATEGORY<span className="text-red-600">*</span>
            </label>

            <select
            
              {...register("category", {required: "Category is required",
              onChange: (e) => setCategory(e.target.value),
              })}
              
              defaultValue=""
              className="h-[43px] w-full appearance-none border border-black bg-white px-4 text-sm outline-none focus:ring-1 focus:ring-black"
            >
              <option value="" disabled>
                Select category...
              </option>
              
               {
                 categories.map((item, index)=>(
                   
                   <option key={index} value={item}>{item}</option>
                 ))
               }
            </select>
          </div>

          {/* Sub Category */}
          <div>
            <label className="mb-2 block text-[10px] font-bold tracking-[0.15em]">
              SUB-CATEGORY
            </label>

            <select
              disabled={!selectedCategory}
              {...register("subcategory", {required: "Sub-category is required"})}
              className="h-[43px] disabled:cursor-not-allowed disabled:text-red-600 disabled:bg-[#f3f3f3] w-full appearance-none border  border-black bg-[#f3f3f3] px-4 text-sm  outline-none focus:ring-1 focus:ring-black"
            
            >
              <option value="" disabled>
                Select sub-category...
              </option>

              {
                currentSubCategories?.map((item, index)=>(
                  <option key={index} value={item}>{item}</option>
                ))
              }
             
            </select>
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="mb-2 block text-[10px] font-bold tracking-[0.15em]">
            TAGS
          </label>

          <div className="flex gap-2">
            <input
              type="text"
              value={tagInput}

              {...register("tags",{
                
                onChange: (e) => setTagInput(e.target.value)
              })}

              
              
              
              onKeyDown={handleKeyDown}
              placeholder="Type a tag and press Enter"
              className="h-[43px] min-w-0 flex-1 border border-black px-4 text-sm outline-none placeholder:text-[#9ca3af] focus:ring-1 focus:ring-black"
            />

            <button
              type="button"
              onClick={handleAddTag}
              className="h-[43px] w-[64px] border border-black bg-white text-[9px] font-bold tracking-wider transition hover:bg-black hover:text-white"
            >
              + ADD
            </button>
          </div>

          {/* Added Tags */}
          {tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="border border-black px-3 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BasicInformation;