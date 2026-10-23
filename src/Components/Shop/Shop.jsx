import ShopCategorBanner from '../ShopeCategoryBanner/ShopCategorBanner';
import Shop_category from '../../shop-Category/Shop_category';
import SideBar from './SideBar';
import NewArrivalCard from '../NewArrivals/NewArrivalCard';

const Shop = () => {
    return (
        <div>

            <ShopCategorBanner/>
            <Shop_category/>
            <div className="mt-5 flex items-start gap-5">
  {/* Sticky sidebar */}
  <aside className="hidden w-56 shrink-0 self-stretch md:block lg:w-60">
    <div className="sticky top-5">
      <SideBar />
    </div>
  </aside>

  {/* Product content */}
  <div className="min-w-0 flex-1">
    {/* তোমার existing product content এখানে রাখবে */}

    <NewArrivalCard />
  </div>
</div>
           
           
            
        </div>
    );
};

export default Shop;