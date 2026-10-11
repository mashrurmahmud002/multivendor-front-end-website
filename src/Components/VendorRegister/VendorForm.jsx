import { useContext, useState } from "react";
import BusinessInfo from "../BuisnessInfo/BuisnessInfo";
import Personal_info from "../Details/personal_info/Personal_info";
import PayoutSetup from "../PayOutDetails/PayOutDetails";
import StoreDetails from "../StoreDetails/StoreDetails";
import VendorSteps from "./VendorSteps";
import { FormProvider, useForm } from "react-hook-form";
import { vendorRegister } from "../../../Api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import  { vendorContext } from "./VendorContextProvider";




const Details = () => {
   const[personalInfo,setPersonalInfo]=useState({});
   const[businessInfo,setBusinessInfo]=useState({});
   const[storeInfo,setStoreInfo]=useState({});
   const[payoutInfo, setPayoutInfo] = useState({});
   const[active, setActive] = useState('personal_info');
   
   const [disabled, setDisabled] = useState(true);
   const method = useForm();
   const [acceptTerms, setAcceptTerms] = useState(false);
   const [termsAccepted, setTermsAccepted] = useState(false);
   const navigate = useNavigate();
   const {activeStep, setActiveStep,countryName, setCountryName, handleNext} = useContext(vendorContext);


   









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
    const final_data = {
       acceptTerms,
       termsAccepted,
       ...data
    }

    try{

      const response = await vendorRegister(final_data);
      if(response){
         Swal.fire({
            position: "center",
            icon: "success",
            title: response?.data?.message,
            showConfirmButton: false,
            timer: 1500
         })
      }
      navigate('/');


    }catch(error){
       console.log(error);
    }
    

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
            activeStep === 4 && <PayoutSetup personalInfo={personalInfo} buisnessInfo={businessInfo} setActive={setActive} acceptTerms={acceptTerms}  setAcceptTerms={setAcceptTerms} termsAccepted={termsAccepted}
            setTermsAccepted={setTermsAccepted} setActiveStep={setActiveStep} handleChanged={handleChanged}/>
           }
           

          
           
          </form>
          </FormProvider>
        
        </>
         
    );
};

export default Details;






