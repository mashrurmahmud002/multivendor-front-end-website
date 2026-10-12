import { useQuery } from "@tanstack/react-query"
import { getProducts, getProductsInfo, vendorGroups } from "./Api"



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