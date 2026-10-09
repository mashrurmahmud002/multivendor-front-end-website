import { useState } from "react";
import BusinessInfo from "../BuisnessInfo/BuisnessInfo";
import Personal_info from "../Details/personal_info/Personal_info";
import PayoutSetup from "../PayOutDetails/PayOutDetails";
import StoreDetails from "../StoreDetails/StoreDetails";
import VendorSteps from "./VendorSteps";
import { FormProvider, useForm } from "react-hook-form";




const Details = () => {
   const[personalInfo,setPersonalInfo]=useState({});
   const[businessInfo,setBusinessInfo]=useState({});
   const[storeInfo,setStoreInfo]=useState({});
   const[payoutInfo, setPayoutInfo] = useState({});
   const[active, setActive] = useState('personal_info');
   const [activeStep, setActiveStep] = useState(1);
   const [disabled, setDisabled] = useState(true);
   const method = useForm();


   









     // Personal Info validation
  const personalInfoValid =
    personalInfo.firstName?.trim() &&
    personalInfo.lastName?.trim() &&
    personalInfo.email?.trim() &&
    personalInfo.phone?.trim() &&
    personalInfo.password?.length >= 8 &&
    personalInfo.confirmPassword === personalInfo.password;


    


  const buisnessInfoValid = Boolean(
  businessInfo?.storeName?.trim() &&
  businessInfo?.storeUrl?.trim() &&
  businessInfo.type &&
  businessInfo?.primary_category &&
  businessInfo?.country &&
  businessInfo?.city &&
  businessInfo?.zip &&
  businessInfo?.buisness_address);


  



  const handleChanged = async(e)=>{

       const firstName = e.target.firstName
       

      
        
        
        
     
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


  

  const onsubmit = async(data)=>{
    console.log(data);

  }

  const onError = async(err)=>{
      console.log(err);    
  }


 
    return (
        <>
        
         <VendorSteps activeStep={activeStep} setActiveStep={setActiveStep} disabled={disabled} />
          <FormProvider {...method}>
          <form action="" onSubmit={method.handleSubmit(onsubmit, onError)}>
           
              
           {
             activeStep === 1 && <Personal_info disabled={disabled} setDisabled={setDisabled} setActive={setActive} handleNext={handleNext} personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
           }
           {
             activeStep === 2 && <BusinessInfo disabled={disabled} setActiveStep={setActiveStep} handleNext={handleNext} setBusinessInfo={setBusinessInfo} businessInfo={businessInfo} setDisabled={setDisabled}  />
           }
           {
            activeStep === 3 && <StoreDetails disabled={disabled} storeValidInfo={storeValidInfo}  setActive={setActive} setActiveStep={setActiveStep} handleNext={handleNext} setDisabled={setDisabled} storeInfo={storeInfo} setStoreInfo={setStoreInfo} />
           }
           {
            activeStep === 4 && <PayoutSetup personalInfo={personalInfo} buisnessInfo={businessInfo} setActive={setActive} setActiveStep={setActiveStep} handleChanged={handleChanged}/>
           }
           

          
           
          </form>
          </FormProvider>
        </>
         
    );
};

export default Details;






