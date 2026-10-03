import {  useContext, useState } from "react";
import ImageUpload from "./ImageUpload";
import BasicInformation from "./BasicInformation";
import DescriptionCopyCard from "./DescriptionInfo";
import PricingCard from "./PriceInformation";
import InventoryCard from "./Inventory";
import ShippingDimensionsCard from "./ShippingInfo";
import PublishCard from "./PublishCardInfo";
import SummaryCard from "./SummeryCard";
import ReadinessCard from "./Readiness";
import { VendorContext } from "../VendorProviderContext/VendorProviderContext";
import ActivePublishCard from "./ActivePublishCard";
import PublishScheduledCard from "./SchedulePublishCard";
import VariantsSection from "./VarientSection";

import { FormProvider, useForm } from "react-hook-form";
import SeoDiscoverabilityCard from "./SeoDisCoverBiliyinfo";
import axios from "axios";
import { productInstance } from "../../../client";
import { ProvideContext } from "./ProductContextProvider";

export default function ProductUploadForm() {











  

  const [image, setImage] = useState("");

   const methods = useForm({
    defaultValues: {
      tags:[],
      // Add other field defaults here
    }
  });
  




  const { activeState, setActiveState, category } = useContext(VendorContext);
  const [categories, setCategories] = useState(["electronics", "fashion_apparel", "home-garden", "sports-outdoors", "beauty-wellness", "food-drink", "book-media", "other"]);
  const [subcategory, setSubCategory] = useState("");
  const [imageerror, setimageError] = useState(null);

   const {generateSKu } = useContext(ProvideContext);






  const uploadImage = async (file) => {
    const fd = new FormData();
    fd.append("image", file);
    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
      fd
    );
    return res?.data?.data?.display_url;
};
 



  const onsubmit = async(data)=>{
    console.log("I am right behind you");
    console.log("motherfucker asshole");


     const varient = await Promise.all(
      (data.varient || []).map(async (v) => ({
        ...v,
        images: await Promise.all(Array.from(v.images || []).map(uploadImage)),
      }))
    );


     
    

    
    if(!image){
       setimageError("Image is required");
       return

    }
    const finaldata = {
       image,
       ...data,
       generateSKu,
       
       varient
       

    };

    try{

      const response = await productInstance.post("/product-upload",finaldata);
      console.log(response);
    }catch(err){
       console.log(err)
    }

    console.log(finaldata)
    
   

  }
  


  console.log(activeState, "I am activestate")

    const onInvalid = (errors)=>{
      console.log("I am invalid");
      console.log(errors);

    }
  



  return (
    <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(onsubmit,onInvalid)}  action="" className="flex min-h-screen gap-1">
      
        <div className="w-[80%]">
          {/* done */}
          <ImageUpload setImage={setImage} imageerror={imageerror} />                           
          <br />
          <BasicInformation categories={categories} setCategories={setCategories}   subcategory={setCategories} setSubCategory={setSubCategory} />
          <br />
          <DescriptionCopyCard />
          <br />
          <PricingCard />
          <br />
          <InventoryCard />
          <br />
          <VariantsSection />
          <br />
          <ShippingDimensionsCard />
          <br />
          <SeoDiscoverabilityCard/>
        </div>

        <div className="min-h-screen w-[20%]">
          <div className="sticky top-0 right-0">
            {activeState === 1 && (
              <PublishCard categories={categories} setCategories={setCategories} subcategory={subcategory} setSubCategory={setSubCategory} />
            )}

            {activeState === 2 && (
              <ActivePublishCard categories={categories} setCategories={setCategories} subcategory={subcategory} setSubCategory={setSubCategory} />
            )}

            {activeState === 3 && (
              <PublishScheduledCard categories={categories} setCategories={setCategories} subcategory={subcategory} setSubCategory={setSubCategory} />
            )}

            <br />
            <SummaryCard category={category} />
            <br />
            <ReadinessCard />
          </div>
        </div>
  
    </form>
    </FormProvider>
  );
}