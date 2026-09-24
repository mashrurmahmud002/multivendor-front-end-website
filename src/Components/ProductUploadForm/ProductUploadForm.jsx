import { useContext, useState } from "react";
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
import ProductContextProvider from "./ProductContextProvider";

export default function ProductUploadForm() {
  const [image, setImage] = useState(null);


  const {activeState, setActiveState} = useContext(VendorContext);
  const[category, setCategory] = useState(["electronics", "fashion_apparel","home-garden","sports-outdoors","beauty-wellness","food-drink","book-media","other"]);
  const[subcategory, setSubCategory] = useState("");




  return (
    <>
       <form action="" className="flex gap-1 min-h-screen">
         <div className="w-[80%]">
          <ProductContextProvider>
            <ImageUpload setImage={setImage}/>
          <br />
          <BasicInformation category={category} setCategory={setCategory} subcategory={subcategory} setSubCategory={setSubCategory}/>
          <br />
          <DescriptionCopyCard/>
          <br />
          <PricingCard/>
          <br />
          <InventoryCard/>
          <br />
          <VariantsSection/>
          <br />
          <ShippingDimensionsCard/>
          <br />
          </ProductContextProvider>
          
         </div>
         <div className="w-[20%]  min-h-screen ">
           <div className="sticky top-0 right-0">
             {
             
               activeState === 1 &&  <PublishCard category={category} setCategory={setCategory} subcategory={subcategory} setSubCategory={setSubCategory}/>

             }     

             {
                activeState === 2 && <ActivePublishCard category={category} setCategory={setCategory} subcategory={subcategory} setSubCategory={setSubCategory}/>
             } 
             {
                activeState === 3 && <PublishScheduledCard category={category} setCategory={setCategory} subcategory={subcategory} setSubCategory={setSubCategory}/>
             }
            
            <br />
            <SummaryCard/>
            <br />
            <ReadinessCard/>

           </div>

         
         </div>

          


       </form>
    </>
  );
}   