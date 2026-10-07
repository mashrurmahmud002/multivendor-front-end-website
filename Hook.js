import { useQuery } from "@tanstack/react-query"
import { getProducts } from "./Api"



 export const useGetProducts = ()=>{

    return useQuery({
        queryKey:['getProducts'],
        queryFn:async()=>{
          return  await getProducts()

        }
    })
}