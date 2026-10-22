import { useQuery } from "@tanstack/react-query"
import { getNewProductsByQuery, getProducts, getProductsInfo, vendorGroups } from "./Api"



 export const useGetProducts = ()=>{

    return useQuery({
        queryKey:['getProducts'],
        queryFn:async()=>{
          return  await getProducts()

        }
    })
}

export const useGetProductsInfo = (id)=>{

    return useQuery({
        queryKey:['getProductsInfo'],
        queryFn:async()=>{
          return  await getProductsInfo(id)
        }
    })
}


export const useGetVendorGroups = ()=>{

    return useQuery({
        queryKey:['getVendorGroups'],
        queryFn:async()=>{
          return  await vendorGroups()
        }
    })
}

export const useGetNewProducts = (data)=>{
    console.log(data,"the use get new products");
    return useQuery({
        queryKey:['getNewProducts', data],
        queryFn:async()=>{
          return  await getNewProductsByQuery(data)
        },
        onError: (error) => {
      // Catch backend error messages cleanly
      const message = error.response?.data?.message || 'Something went wrong';
      console.log(message)
    },
        
    })
}