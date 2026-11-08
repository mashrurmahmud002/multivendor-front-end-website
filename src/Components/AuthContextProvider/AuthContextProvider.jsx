import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { getUserInfo, logOutUser } from '../../../Api';

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const userInfo = {
        user,
        setUser,
        loading,
        setLoading
    }


    
   useEffect(() => {
       const checkUser = async () => {
         try {
           setLoading(true);
           const  response = await getUserInfo();
           
           setLoading(false);
           setUser(response?.data?.user);
         } catch (error) {
   
           
           setUser(null);
           setLoading(false);
           
           
         } finally {
           setLoading(false);
         }
       };
   
       checkUser();
     }, []);

  

  if(loading){
      
       return <LoadingSpinner/>
  }
   

 


    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>;
};

export default AuthContextProvider;