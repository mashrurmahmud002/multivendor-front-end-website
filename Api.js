import axios from "axios"
import { axiosInstance } from "./client"


export const categories = async()=>{
    try{

        const response = await axiosInstance.get("/categories");
        return response

    }catch(error){
        console.log(error)
    }
}