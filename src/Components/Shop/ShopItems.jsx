import React, { useContext, useState } from 'react';
import { useGetAllProductsByPagnation } from '../../../Hook';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { ShopContext } from '../../Context/ShopContext';

const ShopItems = () => {
  const { category_name, setCategory_name } = useContext(ShopContext);
  const [page, setPage] = useState(1);

  const { data: pagination, isLoading } = useGetAllProductsByPagnation(page);

  const totalPages = pagination?.data?.totalPages || 0;

  const handleCurrentPage = (currentPage) => {
    console.log(currentPage);
    setPage(currentPage);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {pagination?.data?.products?.length === 0 ? (
        <div className="h-screen flex justify-center items-center">
          No Products to Show
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 border-l border-t border-black sm:grid-cols-2 lg:grid-cols-3">
            {pagination?.data?.products?.map((product) => (
              <article
                key={product._id}
                className="group relative border-b border-r border-black bg-white"
              >
                {/* IMAGE */}
                <div className="relative aspect-[1.7/1] overflow-hidden bg-[#f5f5f5]">
                  {product.wishlist && (
                    <button
                      className="absolute right-2 top-2 z-10 flex h-[20px] w-[20px] items-center justify-center border border-black bg-white transition hover:bg-black hover:text-white"
                    >
                      <Heart size={11} strokeWidth={1.5} />
                    </button>
                  )}

                  <img
                    src={product?.imageArray?.[0]}
                    alt="image-1"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* PRODUCT INFO */}
                <div className="min-h-[80px] p-3">
                  <p className="text-[15px] font-medium uppercase tracking-[1px] text-gray-500">
                    {product?.brand}
                  </p>

                  <Link to={`/shop/product-details/${product?._id}`}>
                    <h3 className="mt-1 text-[20px] font-bold leading-tight text-black cursor-pointer">
                      {product?.title}
                    </h3>
                  </Link>

                  <div className="mt-3 flex items-end justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-black">
                        {product?.price}
                      </span>

                      {product.comparePrice && (
                        <span className="text-[10px] text-gray-400 line-through">
                          {product?.comparePrice}
                        </span>
                      )}
                    </div>

                    <button
                      className="h-[24px] min-w-[147px] border border-black px-2 text-[9px] font-semibold uppercase tracking-[0.5px] transition hover:bg-black hover:text-white"
                    >
                      ADD →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex gap-2 mt-4">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((item) => (
              <button
                key={item}
                onClick={() => handleCurrentPage(item)}
                className={
                  page === item
                    ? 'bg-black text-white px-3 py-1'
                    : 'border border-black px-3 py-1'
                }
              >
                {item}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ShopItems;