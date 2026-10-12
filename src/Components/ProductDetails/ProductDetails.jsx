import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsInfo } from "../../../Hook";


const ProductDetails = () => {
  // const [selectedImage, setSelectedImage] = useState(0);
  // const [selectedColor, setSelectedColor] = useState("Chalk White");
  // const [selectedSize, setSelectedSize] = useState("Standard (600ml)");
  // const [quantity, setQuantity] = useState(1);

  const {id} = useParams();
  console.log(id);

  const {data} = useGetProductsInfo(id);

  const {imageArray, title,description, price,generateSKu} = data?.data?.products || {};

  const [selectedImage, setSelectedImage] = useState([imageArray?.[0]]);
 

  

  const images = [
    "/products/coffee-1.jpg",
    "/products/coffee-2.jpg",
    "/products/coffee-3.jpg",
    "/products/coffee-4.jpg",
  ];

  const colors = ["Chalk White", "Slate Grey", "Terracotta"];

  const sizes = ["Standard (600ml)", "Large (900ml)"];

  return (
    <div className="min-h-screen bg-white px-3 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">

        {/* Main Product Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.65fr] lg:gap-10">

          {/* ================= IMAGE SECTION ================= */}
          <div>
            {/* Main Image */}
            <div className="relative h-[420px] border border-black bg-[#f5f5f5] sm:h-[500px] lg:h-[540px]">

              {/* Sale Badge */}
              <div className="absolute left-3 top-3 z-10 bg-black px-2 py-1 text-[9px] font-bold tracking-wider text-white">
                SALE -27%
              </div>

              {/* Image */}
              <div className="flex h-full w-full items-center justify-center">
               
                
                  <div className="w-full h-full">
                    <img
                      src={selectedImage || ""}
                      alt={`Product ${imageArray?.[0]|| ""}`}
                      className={`h-full w-full object-contain`}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    
                  </div>
               
               

               <div>
                  {}
               </div>

                {/* Placeholder if image doesn't exist */}
                <div className="absolute flex h-10 w-10 items-center justify-center border border-gray-300 text-gray-300">
                 
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-3 right-3 border border-gray-300 bg-white px-2 py-1 text-[8px] tracking-wider text-gray-500">
                IMAGE { + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Section */}
           <div className="mt-2 grid grid-cols-4">
            {
              imageArray.length > 0 ? imageArray.map((img, i) => <img key={i} src={img} alt={`Product ${i}`} className="h-[200px] w-[200px] object-cover" />):""
            }
            </div> 
          </div>

          {/* ================= PRODUCT INFO ================= */}
          <div className="lg:pt-0">

            {/* Top Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="border border-black px-2 py-1 text-[8px] font-medium uppercase tracking-wider">
                KINFOLK STUDIO
              </div>

              <p className="text-right text-[8px] uppercase tracking-[0.15em] text-gray-500">
                HOME & GARDEN › KITCHEN
              </p>
            </div>

            {/* Title */}
            <h1 className="mt-5 max-w-[420px] text-[25px] font-black uppercase leading-[1.05] tracking-tight sm:text-[28px]">
              {title}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              <div className="text-[12px] tracking-[2px]">
                ★★★★★
              </div>

              <span className="text-[10px] font-bold">
                4.8
              </span>

              <span className="text-[9px] text-gray-400">
                (142 reviews)
              </span>

              <span className="text-[8px] text-gray-400">
                ·
              </span>

              <span className="text-[8px] uppercase tracking-wider text-gray-400">
                SKU: {generateSKu}
              </span>
            </div>

            <div className="my-4 border-t border-gray-200" />

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-[32px] font-black tracking-tight">
                ${price}
              </span>

              <span className="text-[13px] text-gray-400 line-through">
                $88
              </span>

              <span className="bg-black px-2 py-1 text-[8px] font-bold text-white">
                SAVE $24
              </span>
            </div>

            <div className="my-4 border-t border-gray-200" />

            {/* ================= COLOR ================= */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[8px] font-bold uppercase tracking-widest">
                  COLOR
                </span>

                <span className="text-[9px] font-medium">
                  
                </span>
              </div>

              <div className="flex">
                {colors.map((color) => (
                  <button
                    key={color}
                    
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* ================= SIZE ================= */}
            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[8px] font-bold uppercase tracking-widest">
                  SIZE
                </span>

                <span className="text-[9px] font-medium">
                  
                </span>
              </div>

              <div className="flex">
                {sizes.map((size) => (
                  <button
                    key={size}
                   
                    className={`border border-black px-3 py-2 text-[8px] uppercase tracking-wider $`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* ================= CART ================= */}
            <div className="mt-6 flex gap-2">

              {/* Quantity */}
              <div className="flex h-[32px] border border-black">
                <button
                 
                  className="w-8 text-sm"
                >
                  −
                </button>

                <div className="flex w-8 items-center justify-center border-x border-black text-[10px]">
                
                </div>

                <button
                 
                  className="w-8 text-sm"
                >
                  +
                </button>
              </div>

              {/* Add Cart */}
              <button className="h-[32px] flex-1 bg-[#f23513] text-[9px] font-bold uppercase tracking-wider text-white transition hover:bg-[#d92d0e]">
                Add to Cart →
              </button>

              {/* Wishlist */}
              <button className="flex h-[32px] w-[38px] items-center justify-center border border-black text-lg">
                ♡
              </button>
            </div>

            {/* Stock */}
            <div className="mt-4 flex items-center gap-1 text-[8px] uppercase tracking-wider text-gray-500">
              <span className="h-1.5 w-1.5 bg-black" />
              In stock · Portland, OR
            </div>

            {/* ================= SHIPPING INFO ================= */}
            <div className="mt-4 grid grid-cols-3 border border-black">
              <div className="border-r border-black p-2">
                <p className="text-[7px] uppercase tracking-widest text-gray-500">
                  Ships From
                </p>
                <p className="mt-1 text-[8px] font-bold">
                  Portland, OR
                </p>
              </div>

              <div className="border-r border-black p-2">
                <p className="text-[7px] uppercase tracking-widest text-gray-500">
                  Processing
                </p>
                <p className="mt-1 text-[8px] font-bold">
                  3–5 Business Days
                </p>
              </div>

              <div className="p-2">
                <p className="text-[7px] uppercase tracking-widest text-gray-500">
                  Returns
                </p>
                <p className="mt-1 text-[8px] font-bold">
                  30 Days
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "#COFFEE",
                "#CERAMICS",
                "#POUR-OVER",
                "#HANDMADE",
                "#KITCHEN",
              ].map((tag) => (
                <span
                  key={tag}
                  className="border border-gray-300 px-2 py-1 text-[7px] tracking-widest text-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom line from screenshot */}
        <div className="mt-8 border-t border-black" />
      </div>
    </div>
  );
};

export default ProductDetails;