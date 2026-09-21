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

export default function ProductUploadForm() {
  const [image, setImage] = useState(null);


  const {activeState, setActiveState} = useContext(VendorContext);




  return (
    <>
       <form action="" className="flex gap-1 min-h-screen">
         <div className="w-[80%]">
          <ImageUpload setImage={setImage}/>
          <br />
          <BasicInformation/>
          <br />
          <DescriptionCopyCard/>
          <br />
          <PricingCard/>
          <br />
          <InventoryCard/>
          <br />
          <ShippingDimensionsCard/>
          <br />
          
         </div>
         <div className="w-[20%]  min-h-screen ">
           <div className="sticky top-0 right-0">
             {
             
               activeState === 1 &&  <PublishCard />

             }     

             {
                activeState === 2 && <ActivePublishCard/>
             } 
             {
                activeState === 3 && <PublishScheduledCard/>
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