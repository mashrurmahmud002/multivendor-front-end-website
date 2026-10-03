import axios from "axios"
import { authInstance, axiosInstance, productInstance } from "./client"


export const categories = async()=>{
    try{

        const response = await axiosInstance.get("/categories");
        return response

    }catch(error){
        console.log(error)
    }
}


export const productUpload = async(data)=>{
    try{
        const response = await productInstance.post("/product-upload",data);
        return response
    }catch(error){
        console.log(error)
    }
}

export const createUser = async(data)=>{
    try{
        const response = await authInstance.post("/create-account",data);
        return response
    }catch(error){
       console.log(error)
    }



    }
   
export const loginUser = async(data)=>{
    try{
        const response = await authInstance.post("/login",data);
        return response
    }catch(error){
        console.log(error)
    }
}
