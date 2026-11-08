

import React from 'react';
import Header from '../Components/Header/Header';
import VendorSidebar from '../Components/VendorDashBoard/VendorSideBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const VendorDashBoardLayOut = () => {
    return (
        <div>
            <Header/>
            <main>
                <section>
                    {/* sidebar */}
                   <div className='flex gap-2'>
                     <aside className='min-w-100'>
                        <VendorSidebar/>
                    </aside>
                    {/* outlet problem */}
                    <div>
                        <Outlet/>
                    </div>
                   </div>

                </section>
            </main>
            <Footer/>
            
        </div>
    );
};

export default VendorDashBoardLayOut;