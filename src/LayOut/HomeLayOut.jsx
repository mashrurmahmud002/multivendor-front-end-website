import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const HomeLayOut = () => {
    return (
         <>
          <header>
              <Header/>
          </header>
          <main>

            <Outlet/>

          </main>
          <footer>
            <Footer/>

          </footer>
         </>
    );
};

export default HomeLayOut;