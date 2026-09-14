import React from "react";
const categories = [
  { name: "Electronics", count: "4,821" },
  { name: "Fashion", count: "12,340" },
  { name: "Home & Garden", count: "6,702" },
  { name: "Sports", count: "3,190" },
  { name: "Beauty", count: "5,447" },
  { name: "Books & Media", count: "9,018" },
  { name: "Automotive", count: "2,301" },
  { name: "Food & Drink", count: "1,884" },
];

const CategoryCard = () => {
  return (
    <section className="w-full border-t border-black bg-white px-3 sm:px-6 lg:px-8">
      <div className="py-5">
        {/* Section Label */}
        <p className="mb-4 text-[7px] font-medium uppercase tracking-[1.5px] text-gray-500">
          Shop by Category
        </p>

        {/* Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#"
              className={`
                group
                min-h-[44px]
                border-l
                border-black
                px-3
                py-2
                transition-colors
                hover:bg-black
                ${
                  index === categories.length - 1
                    ? "lg:border-r"
                    : ""
                }
              `}
            >
              {/* Category Name */}
              <p className="text-[15px] font-medium leading-none text-black transition-colors group-hover:text-white">
                {category.name}
              </p>

              {/* Count */}
              <p className="mt-1.5 text-[9px] tracking-[0.8px] text-gray-400 transition-colors group-hover:text-gray-300">
                {category.count}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCard;