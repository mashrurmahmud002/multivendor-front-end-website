import { useEffect, useState } from 'react';
import { categories } from '../../Api';

const Shop_category = () => {
    const [category, setCategory] = useState([]);
    const[active, setActive] = useState(null);
   



    const handleCategories = async()=>{
        try {
            const response = await categories();
            setCategory(response.data?.categories ?? []);
        } catch (error) {
            console.error("Failed to load categories", error);
        }
    }
    

    useEffect(()=>{

        handleCategories() 

        


    },[])

    
    return (
       
            
        <section className="w-full border-y border-black bg-white">
      <div className="flex w-full overflow-x-auto scrollbar-none">
        {category?.map((cat, index) => {
         

          return (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`
                flex
                h-[38px]
                shrink-0
                items-center
                justify-center
                border-r
                border-black
                px-5
                text-[8px]
                font-semibold
                uppercase
                tracking-[1px]
                transition-colors
                first:border-l-0
                ${
                  active==index
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }
              `}
            >
              {cat?.name} 
            </button>
          );
        })}
      </div>
     
    </section>
      
    );
};

export default Shop_category;