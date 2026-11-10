
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useGetCartProducts, useGetUpdatedCart } from "../../../Hook";
import ShopCartContext from "../../Context/ShopCartContext";

const initialProducts = [
  {
    id: 1,
    brand: "KINFOLK STUDIO",
    name: "Ceramic Pour-Over Set",
    variant: "Bone / One size",
    price: 64,
    initials: "CP",
    quantity: 1,
  },
  {
    id: 2,
    brand: "ATELIER NORD",
    name: "Wool Merino Overshirt",
    variant: "Charcoal / M",
    price: 128,
    initials: "WO",
    quantity: 1,
  },
  {
    id: 3,
    brand: "VOLT ELECTRONICS",
    name: "Wireless Earbuds Pro",
    variant: "Black / Standard",
    price: 149,
    initials: "WE",
    quantity: 1,
  },
];

const ShoppingCartItems = () => {
  const [products, setProducts] = useState(initialProducts);
  const {user} = useContext(AuthContext);

  const[count, setCount] = useState(1);

  const {data} = useGetCartProducts(user);

  const [update, setUpdate] = useState(0);

  const [grab, setgrab] = useState(null);
  const {cartproducts, setCartProducts} = useContext(ShopCartContext);

  const updateCartQuantity = useGetUpdatedCart(); 



  const cartList = data?.data?.data?.cart;
  


 

  
  

  // Increase or decrease product quantity


  
  const updateQuantity = (cartId, currentQty, change, availableStock) => {

    const newQty = currentQty + change;
    if(newQty < 0 || newQty > availableStock){
        return;
    }
    updateCartQuantity.mutateAsync({_id:cartId, quantity:newQty});
      
  };

  // Remove product from cart
  const removeProduct = (id) => {
    setProducts((prev) =>
      prev.filter((product) => product.id !== id)
    );
  };

  const handleQuantityChange = (productId, value, maxStock) => {
    const newQty = parseInt(value);

    if(isNaN(newQty)){
       return 
    }

    const finalQty = newQty > maxStock ? maxStock : newQty;
    updateCartQuantity.mutateAsync({_id:productId, quantity: finalQty});
   


   
  };

  return (
    <div className="w-full bg-white">

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-[1.5fr_1fr_0.7fr] border-b border-black px-5 py-5">
        <p className="text-[11px] tracking-[2px] uppercase">
          Product Information
        </p>

        <p className="text-[11px] tracking-[2px] uppercase text-center">
          Quantity
        </p>

        <p className="text-[11px] tracking-[2px] uppercase text-right">
          Total
        </p>
      </div>

      
      

      {/* Product List */}
      <div>
        {
         cartList?.length > 0 ?
         cartList?.map((product, index) => {

            const cartQty = product?.quantity || 1;
            const price = product?.productId?.price || 0;
            const availableStock = product?.productId?.quantity || 1;
            return (
             <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_0.7fr] items-center gap-5 md:gap-0 px-5 py-7 border-b border-black"
          >

            {/* Product Information */}
            <div className="flex items-center gap-5">

              {/* Image Placeholder */}
              <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-[#f1f1f1] border border-gray-200 flex flex-col justify-between p-2">
                {/* <span className="text-[10px] tracking-widest text-gray-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-xl md:text-2xl font-black text-center text-black">
                  {product.initials}
                </span> */}
                <img className='w-full h-full' src={product?.productId?.imageArray?.[0]} alt="" />

                <span />
              </div>

              {/* Product Details */}
              <div className="space-y-2">

                <p className="text-[10px] md:text-[11px] tracking-[2px] text-gray-500 uppercase">
                  
                </p>

                <h3 className="text-lg md:text-xl font-bold text-black">
                  {product?.productId?.title}
 
                </h3>

                <p className="text-sm text-gray-600">
                 
                </p>

                <button
                  onClick={() => removeProduct(product.id)}
                  className="text-[11px] uppercase tracking-[1.5px] border-b border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition"
                >
                  Remove
                </button>

              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex md:justify-center items-center gap-0">

              <span className="md:hidden text-[11px] tracking-widest uppercase mr-5">
                Quantity
              </span>

              <div className="flex border border-black h-11">

                <button
                  onClick={() => updateQuantity(product?._id, cartQty, -1, availableStock)}
                  className="w-11 border-r border-black hover:bg-black hover:text-white transition"
                  aria-label="Decrease quantity"
                >
                  −
                </button>

               {
                  product?._id && (
                    <input
                     value={cartQty}
                      type="text"
                      className="w-14 text-center outline-none"

                      
                      
                      onChange={(e) => handleQuantityChange(product?._id, e.target.value, availableStock)}
                    />
                  )
               }

                <button
                  onClick={() => updateQuantity(product?._id, cartQty, 1, availableStock)}
                  className="w-11 border-l border-black hover:bg-black hover:text-white transition"
                  aria-label="Increase quantity"
                >
                  +
                </button>

              </div>
            </div>

            {/* Product Total */}
            <div className="flex justify-between md:justify-end items-center">

              <span className="md:hidden text-[11px] tracking-widest uppercase">
                Total
              </span>

              <p className="text-xl font-extrabold text-black">
                ${price * cartQty}
              </p>

            </div>

          </div>
            )
          
          
         }):(<div className="flex justify-center items-center min-h-[60vh]">

            <h1>No Items</h1>
          </div>)
        }
       
      </div>

      {/* Empty Cart */}
      {products.length === 0 && (
        <div className="py-16 text-center">
          <h2 className="text-2xl font-bold">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mt-2">
            Add some products to get started.
          </p>
        </div>
      )}

    </div>
  );
};

export default ShoppingCartItems;
