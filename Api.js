import axios from "axios"
import { authInstance, axiosInstance, productInstance, vendorAuthInstance } from "./client"
import Swal from "sweetalert2";


export const categories = async()=>{
    try{

        const response = await axiosInstance.get("/categories");
        return response

    }catch(error){
        console.log(error);
        
    }
}


export const productUpload = async(data)=>{
    try{
        const response = await productInstance.post("/product-upload",data);
        return response
    }catch(error){
        console.log(error);
        
    }
}

export const createUser = async(data)=>{
    try{
        const response = await authInstance.post("/create-account",data);
        return response
    }catch(error){
        console.log(error);
       
    }



    }
   
export const loginUser = async(data)=>{

    console.log("Hello I am Here loginUser", data)
    try{
        const response = await authInstance.post("/login",data);
        return response
    }catch(error){
       console.log("You are in log error message")
       console.log(error?.message); 
        Swal.fire({
        position: "center",
        icon: "error",
        title: "Invalid Credentials!",
        showConfirmButton: false,
        timer: 1500
        })
    }
}


export const getProducts = async()=>{
    try{
        const response = await productInstance.get("/products");
        console.log(response,"the response from api.js");
        return response
    }catch(error){
        console.log(error);
    }
 }


 export const logOutUser = async()=>{
    try{
        const response = await authInstance.post("/logout");
        return response
    }catch(error){
        console.log(error);
        Swal.fire({
        position: "center",
        icon: "error",
        title: "Something went wrong",
        showConfirmButton: false,
        timer: 1500
                })
    }
 }

 export const  getUserInfo = async()=>{
     try{
        const response = await authInstance.get("/get-user-exist");
        return response
     }catch(error){
         console.log(error?.message);
     }
     
 }

 export const vendorRegister = async(data)=>{
    try{
        const response = await vendorAuthInstance.post("/create-vendor-register", data);
        return response
    }catch(error){
        console.log(error,"Helo I am error");
                Swal.fire({
                  position: "center",
                  icon: "error",
                  title: "Something went wrong",
                  showConfirmButton: false,
                  timer: 1500
                })
        
    }


    }


    export const vendorLogin = async(data)=>{
        console.log("I am vendor login", data)
        try{
            const response = await vendorAuthInstance.post("/vendor-login", data);
            return response
        }catch(error){
            console.log(error);
            Swal.fire({
                  position: "center",
                  icon: "error",
                  title: "Something went wrong",
                  showConfirmButton: false,
                  timer: 1500
                })
            
        }
    
        }



        export const vendorGroups = async()=>{
            try{

                const response = await vendorAuthInstance.get("/top-vendor");
                return response

            }catch(error){
                console.log(error);
                
            }
        }



        export const getProductsInfo = (id)=>{
            try{
                const response = productInstance.get(`/products/${id}`);
                return response
            }catch(error){
                console.log(error);
                
            }
        }

        export const getSearchProducts = async(data)=>{
            console.log(data,"THis is search data")
            try{
                const response = await productInstance.get(`/search-products?title=${data}`);
                console.log("I am search data", response?.data?.products);
                return response

            }catch(err){
                console.log(err)
            }

        }

       
       
        export const getNewProductsByQuery = async(data)=>{
            console.log(data,"THis is search data")
            try{
                const response = await productInstance.get(`/query-products-new?category=${data}`);
                return response
            }
            catch(err){
                console.log(err?.response.data.message)
            }

        }

 

