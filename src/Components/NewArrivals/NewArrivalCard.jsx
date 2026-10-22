import React, { useContext } from 'react';
import { ShopContext } from '../ShopCategoryContext/ShopCateGoryContextProvider';
import { useGetNewProducts } from '../../../Hook';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const NewArrivalCard = () => {
    const {category_name, setCategory_name} = useContext(ShopContext);

    const {data, isError, isLoading} = useGetNewProducts(category_name);
    console.log(data);

    if(isLoading){
        return <LoadingSpinner/>
    }
    return (
        isError ? (<div className='h-screen flex justify-center items-center'>
             No Products to Show
        </div>) : <div className="grid grid-cols-1 border-l border-t border-black sm:grid-cols-2 lg:grid-cols-3">

        {data?.data?.products.map((product, index) => (
          <article
            key={product.name}
            className="
              group
              relative
              border-b
              border-r
              border-black
              bg-white
            "
          >

            {/* ================= IMAGE ================= */}
            <div className="relative aspect-[1.7/1] overflow-hidden bg-[#f5f5f5]">

              {/* Badge */}
              {
                product?.isNewProduct===true && (
                    <span
                  className="
                    absolute
                    left-2
                    top-2
                    z-10
                    bg-black
                    px-2
                    py-[3px]
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.5px]
                    text-white
                  "
                >
                  New
                </span>
                )
              }

              {/* Wishlist */}
              {product.wishlist && (
                <button
                  className="
                    absolute
                    right-2
                    top-2
                    z-10
                    flex
                    h-[20px]
                    w-[20px]
                    items-center
                    justify-center
                    border
                    border-black
                    bg-white
                    transition
                    hover:bg-black
                    hover:text-white
                  "
                >
                  <Heart size={11} strokeWidth={1.5} />
                </button>
              )}

              {/* Product Image */}
              <img
                src={product.imageArray[0]}
                alt={`image-1`}
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* ================= PRODUCT INFO ================= */}
            <div className="min-h-[80px] p-3">

              {/* Brand */}
              <p
                className="
                  text-[15px]
                  font-medium
                  uppercase
                  tracking-[1px]
                  text-gray-500
                "
              >
                {product.brand}
              </p>

              {/* Product Name */}
             <Link to={`/shop/product-details/${product?._id}`}> <h3
                className="
                  mt-1
                  text-[20px]
                  font-bold
                  leading-tight
                  text-black
                  cursor-pointer
                "
              >
                {product.title}
              </h3></Link> 

              {/* Price + Button */}
              <div className="mt-3 flex items-end justify-between">

                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-black">
                    {product.price}
                  </span>

                  {product.comparePrice && (
                    <span className="text-[10px] text-gray-400 line-through">
                      {product.comparePrice}
                    </span>
                  )}
                </div>

                <button
                  className="
                    h-[24px]
                    min-w-[147px]
                    border
                    border-black
                    px-2
                   
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.5px]
                    transition
                    hover:bg-black
                    hover:text-white
                  "
                >
                  ADD →
                </button>

              </div>
            </div>
          </article>
        ))}
      </div>
    );
};

export default NewArrivalCard;