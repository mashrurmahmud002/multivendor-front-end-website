import { useEffect, useState } from 'react';
import { categories } from '../../Api';

const Shop_category = () => {
  const [category, setCategory] = useState([]);
  const [active, setActive] = useState(null);

  const handleCategories = async () => {
    try {
      const response = await categories();
      setCategory(response.data?.categories ?? []);
    } catch (error) {
      console.error('Failed to load categories', error);
    }
  };

  useEffect(() => {
    handleCategories();
  }, []);

  return (
    <section className="w-full border-y border-black bg-white">
      <div className="flex w-full snap-x overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {category?.map((cat, index) => (
          <button
            key={cat?.id ?? index}
            type="button"
            onClick={() => setActive(index)}
            aria-pressed={active === index}
            className={`flex h-10 shrink-0 snap-start items-center justify-center whitespace-nowrap border-r border-black px-4 text-[10px] font-semibold uppercase tracking-[1px] transition-colors sm:h-11 sm:px-5 sm:text-[11px] md:h-12 md:px-6 md:text-xs lg:px-8 lg:text-[13px] ${
              active === index
                ? 'bg-black text-white'
                : 'bg-white text-black hover:bg-black hover:text-white'
            }`}
          >
            {cat?.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Shop_category;