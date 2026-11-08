import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addtoCart, cartLength, deleteProductsFromCart, getCartItems, getNewProductsByQuery, getProducts, getProductsByPagination, getProductsInfo, getQueryProducts, vendorGroups } from "./Api"



 export const useGetProducts = ()=>{

    return useQuery({
        queryKey:['getProducts'],
        queryFn:async()=>{
          return  await getProducts()

        },
        
    })
}

export const useDeleteProductsFromCart = ()=>{
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      return await deleteProductsFromCart(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['getCartProducts']);
    },
  })
}

export const useGetCartLength = (userId)=>{
  
    return useQuery({
        queryKey:['getCartProducts', userId],
        queryFn:async()=>{
          return  await cartLength()
        },
        enabled: !!userId,
        staleTime:0
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


export const useCreateAddtoCardProducts = ()=>{

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data) => {
          return await addtoCart(data);
        },

        onSuccess: () => {
          queryClient.invalidateQueries(['getCartProducts']);
        },

    })
    
   
}


export const useGetCartProducts = (userId)=>{
  console.log(userId,"THis is from hook userId");

   return  useQuery({
    queryKey:['getCartProducts', userId],
    queryFn:async()=>{
      const res = await getCartItems();
      console.log(res,"THis is from hook response");
      return res
    },
    enabled: !!userId,
    staleTime:0
  
})

}

export const useGetProductsByQuery = ()=>{
  return useQuery({
    queryKey:['getProductsByQuery'],
    queryFn:async()=>{
      return await getNewProductsByQuery()
    }
  })
}

export const useGetAllProductsByQuery = (category)=>{
  console.log(category);
  return useQuery({
    queryKey:['getAllProductsByQuery', category],
    queryFn:async()=>{
      return await getQueryProducts(category);
    },
    enabled:!!category,
    staleTime:0
  })
}


export const useGetAllProductsByPagnation = (data) =>{

  return useQuery({
    queryKey:['getAllProductsByPagnation', data],
    queryFn:async()=>{
      return await  getProductsByPagination(data);
    },
    enabled:!!data,
    staleTime:0
  })
}