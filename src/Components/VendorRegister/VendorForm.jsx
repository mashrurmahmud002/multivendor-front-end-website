import { useState } from "react";
import BusinessInfo from "../BuisnessInfo/BuisnessInfo";
import Personal_info from "../Details/personal_info/Personal_info";
import PayoutSetup from "../PayOutDetails/PayOutDetails";
import StoreDetails from "../StoreDetails/StoreDetails";
import VendorSteps from "./VendorSteps";




const Details = () => {
   const[personalInfo,setPersonalInfo]=useState({});
   const[businessInfo,setBusinessInfo]=useState({});
   const[storeInfo,setStoreInfo]=useState({});
   const[payoutInfo, setPayoutInfo] = useState({});
   const[active, setActive] = useState('personal_info');
   const [activeStep, setActiveStep] = useState(1);
   const [disabled, setDisabled] = useState(true);


   console.log("this is buisness info object",businessInfo);









     // Personal Info validation
  const personalInfoValid =
    personalInfo.firstName?.trim() &&
    personalInfo.lastName?.trim() &&
    personalInfo.email?.trim() &&
    personalInfo.phone?.trim() &&
    personalInfo.password?.length >= 8 &&
    personalInfo.confirmPassword === personalInfo.password;


    console.log(personalInfoValid,"this is personal info valid")


  const buisnessInfoValid = Boolean(
  businessInfo?.storeName?.trim() &&
  businessInfo?.storeUrl?.trim() &&
  businessInfo.type &&
  businessInfo?.primary_category &&
  businessInfo?.country &&
  businessInfo?.city &&
  businessInfo?.zip &&
  businessInfo?.buisness_address);


  console.log(buisnessInfoValid,"this is buisness info valid")



  const handleChanged = async(e)=>{

       const firstName = e.target.firstName
       console.log(firstName)

      
        
        
        setPersonalInfo({...personalInfo,[e.target.name]:e.target.value});
     
        setStoreInfo({...storeInfo,[e.target.name]:e.target.value});
        setPayoutInfo({...payoutInfo,[e.target.name]:e.target.value});

        

    }

    const handleNext = () => {
        
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };


    const handleSubmit = async()=>{


    }

    const storeValidInfo = Boolean(
      storeInfo?.storeDescription?.trim() &&
     
      storeInfo?.shipsFrom?.trim() &&
      storeInfo?.website?.trim() &&
      storeInfo?.instagram?.trim() &&
      storeInfo?.processingTime?.trim() &&
      storeInfo?.returnPolicy?.trim()

  )


 console.log(storeValidInfo,"this is store valid info")
    return (
        <>
        
         <VendorSteps activeStep={activeStep} setActiveStep={setActiveStep} disabled={disabled} />
          <form action="" onSubmit={handleSubmit}>
              
           {
             activeStep === 1 && <Personal_info disabled={!personalInfoValid} setDisabled={setDisabled} setActive={setActive} handleNext={handleNext} handleChanged={handleChanged}/>
           }
           {
             activeStep === 2 && <BusinessInfo disabled={!buisnessInfoValid} setActiveStep={setActiveStep} handleNext={handleNext} setBusinessInfo={setBusinessInfo} businessInfo={businessInfo}   />
           }
           {
            activeStep === 3 && <StoreDetails disabled={!storeValidInfo} storeInfo={storeInfo} setStoreInfo={setStoreInfo} setActive={setActive} setActiveStep={setActiveStep} handleNext={handleNext} />
           }
           {
            activeStep === 4 && <PayoutSetup storeInfo={storeInfo} buisnessInfo={businessInfo} personalInfo={personalInfo} setActive={setActive} setActiveStep={setActiveStep} handleChanged={handleChanged}/>
           }
           

          
           
          </form>
        </>
         
    );
};

export default Details;






