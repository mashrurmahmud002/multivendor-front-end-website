import axios from "axios"
import { authInstance, axiosInstance, cartInstance, orderInstance, productInstance, vendorAuthInstance } from "./client"
import Swal from "sweetalert2";
import { toast } from "react-toastify";


export const categories = async()=>{
    try{

        const response = await axiosInstance.get("/categories");
        return response

    }catch(error){
        
        
    }
}


export const productUpload = async(data)=>{
    try{
        const response = await productInstance.post("/product-upload",data);
        return response
    }catch(error){
        
        
    }
}

export const createUser = async(data)=>{
    try{
        const response = await authInstance.post("/create-account",data);
        return response
    }catch(error){
        
       
    }



    }
   
export const loginUser = async(data)=>{

    
    try{
        const response = await authInstance.post("/login",data);
        if(response){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Login Successfully!",
                showConfirmButton: false,
                timer: 1500
                })
        }
        return response
    }catch(error){
       
        
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
        
        return response
    }catch(error){
        
    }
 }


 export const logOutUser = async()=>{
    try{
        const response = await authInstance.post("/logout");
        return response
    }catch(error){
        
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
        return response;
     }catch(error){
         
     }
     
 }

 export const vendorRegister = async(data)=>{
    try{
        const response = await vendorAuthInstance.post("/create-vendor-register", data);
        return response
    }catch(error){
        
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
        
        try{
            const response = await vendorAuthInstance.post("/vendor-login", data);
            return response
        }catch(error){
            
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
                
                
            }
        }



        export const getProductsInfo = (id)=>{
            try{
                const response = productInstance.get(`/products/${id}`);
                return response
            }catch(error){
                
                
            }
        }

        export const getSearchProducts = async(data)=>{
            
            try{
                const response = await productInstance.get(`/search-products?title=${data}`);
                
                return response

            }catch(err){
                
            }

        }

       
       
        export const getNewProductsByQuery = async(data)=>{
            
            try{
                const response = await productInstance.get(`/query-products-new?category=${data}`);
                return response
            }
            catch(err){
                
            }

        }


        export const addtoCart = async(data)=>{

           try{
             const response = await cartInstance.post('/add-to-cart', data);
            if(response){
                toast.success('Product added to cart', {
                position: 'top-right',
              });
            }
            return response
           }catch(err){

            

             toast.error('Something went wrong', {
             position: 'top-right',
             });
             
           }


        }


        export const getCartItems = async()=>{
            try{
                const response = await cartInstance.get('/get-user-cart');
                
               
                return response
            }catch(err){
                
            }
        }

        export const getQueryProducts = async(data)=>{
            
            try{
                const response = await productInstance.get(`/query-products?category=${data}`);
                return response;
            }catch(err){
                console.log(err?.message);
                
            }
        }

        export const deleteProductsFromCart = async(data)=>{
            try{
                const response = await cartInstance.delete(`/delete-from-cart/${data}` );
                if(response){
                    toast.success('Product deleted from cart', {
                    position: 'top-right',
                    });
                }
                return response

            }catch(err){
                
                toast.error('Something went wrong', {
                    position: 'top-right',
                })
            }
        }

        export const cartLength = async()=>{
           try{
             const response = await cartInstance.get(`/get-cart-length`);
            return response
           }catch(err){

             
            
           }
        }

        export const updateCartQuantity = async(data)=>{
            try{
                const response = await cartInstance.put(`/update-cart-product-quantity/${data?._id}`,{
                    quantity: data?.quantity,
                    
                });
                if(response){
                     toast.success('Product quantity updated', {
                        position: 'top-right',
                     })
                }
                return response
            }catch(err){
              console.log(err);   
            }
        }





        export const getVendorStoresName = async()=>{
            try{
                const response = await vendorAuthInstance.get('/get-vendor-store-name');
                return response
            }catch(err){
                console.log(err?.message)
                
            }
        }

        

        export const getProductsByPagination = async(data, category)=>{
            try{
                const response = await productInstance.get(`/get-all-products-by-pagnation?page=${data}&category=${category}`);
                return response
            }catch(err){
                console.log(err);
                console.log(err?.message)
                
            }
         }


         export const createOrders = async(data)=>{
            try{

               const response = await orderInstance.post('/create-order', data); 
              
                 toast.success('Order added successfully', {
                position: 'top-right',
               })

                  return response;
               
              
              

            }catch(err){

                toast.error('Order already exist', {
                    position: 'top-right',
                })

             

                console.log(err);
                
            }
         }
        

 

