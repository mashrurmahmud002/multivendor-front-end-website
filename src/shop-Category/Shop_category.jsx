import { useContext, useEffect, useState } from 'react';
import { categories } from '../../Api';
import { ShopContext } from '../Components/ShopCategoryContext/ShopCateGoryContextProvider';
import { useGetNewProducts } from '../../Hook';

const Shop_category = () => {
  const [category, setCategory] = useState([]);
  const [active, setActive] = useState(null);
  const {category_name, setCategory_name} = useContext(ShopContext);

  const {data} = useGetNewProducts(category_name);

  console.log(data);

 

  const handleCategories = async () => {
    try {
      const response = await categories();
      setCategory(response.data?.categories ?? []);
    } catch (error) {
      console.error('Failed to load categories', error);
      console.log(error.response.data.message);
    }
  };


  const handleActive = (index, cat)=>{
    
    setActive(index);
    if(cat?.name === "All"){
       setCategory_name("All".toLowerCase());
    }
    if(cat?.name === "Electronics"){
      setCategory_name("Electronics".toLowerCase());
    }
    if(cat?.name === "Fashion"){
      setCategory_name("Fashion".toLowerCase());
    }
    if(cat?.name === "Home"){
      setCategory_name("Home".toLowerCase());
    }
    if(cat?.name === "Sports"){
      setCategory_name("Sports".toLowerCase());
    }
    if(cat?.name === "Beauty"){
      setCategory_name("Beauty".toLowerCase());
    }
    if(cat?.name === "Books"){
      setCategory_name("Books".toLowerCase());
    }
    if(cat?.name === "Automotive"){
      setCategory_name("Automotive".toLowerCase());
    }
    if(cat?.name === "Food"){
      setCategory_name("Food".toLowerCase());
    }
    
    

  }

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
            onClick={() => handleActive(index,cat)}
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