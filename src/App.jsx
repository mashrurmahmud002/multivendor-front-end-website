import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayOut from './LayOut/HomeLayOut'
import Home from './Components/Home/Home'
import ShopLayOut from './LayOut/ShopLayOut'
import Shop from './Components/Shop/Shop'
import VendorformLayout from './LayOut/VendorformLayout'
import Vendor from './Components/Vendor/Vendor'


function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayOut/>} >
          <Route path='/' element={<Home/>} />
           
        </Route>
        <Route path="/shop" element={<ShopLayOut/>} >
         <Route path='/shop' element={<Shop/>}/>
        
        </Route>
        <Route path='/vendor' element={<VendorformLayout/>}>
          <Route path='/vendor' element={<Vendor/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
     </>
  )
}

export default App
