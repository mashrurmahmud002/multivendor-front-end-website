import { useState } from 'react';
import Personal_info from './personal_info/Personal_info';
import BusinessInfo from '../BuisnessInfo/BuisnessInfo';
import StoreDetails from '../StoreDetails/StoreDetails';
import PayoutSetup from '../PayOutDetails/PayOutDetails';

const Details = () => {
   const[personalInfo,setPersonalInfo]=useState({});
   const[businessInfo,setBusinessInfo]=useState({});
   const[storeInfo,setStoreInfo]=useState({});
   const[payoutInfo, setPayoutInfo] = useState({});
   const[active, setActive] = useState('personal_info');



    const handleChanged = async(e)=>{
        setPersonalInfo({...personalInfo,[e.target.name]:e.target.value});
        setBusinessInfo({...businessInfo,[e.target.name]:e.target.value});
        setStoreInfo({...storeInfo,[e.target.name]:e.target.value});
        setPayoutInfo({...payoutInfo,[e.target.name]:e.target.value});

        

    }


    const handleSubmit = async()=>{


    }



    return (
        <>
          <form action="" onSubmit={handleSubmit}>
              
           {
             active === 'personal_info' && <Personal_info setActive={setActive} handleChanged={handleChanged}/>
           }
           {
             active === 'buisness_info' && <BusinessInfo setActive={setActive}  handleChanged={handleChanged}/>
           }
           {
            active === 'store_details' && <StoreDetails setActive={setActive} handleChanged={handleChanged}/>
           }
           {
            active === 'payout_info' && <PayoutSetup storeInfo={storeInfo} personalInfo={personalInfo} setActive={setActive} handleChanged={handleChanged}/>
           }
           

          
           
          </form>
        </>
         
    );
};

export default Details;