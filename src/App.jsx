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
import Details from './Components/VendorRegister/VendorForm'
import DealsLayOut from './LayOut/DealsLayOut'
import Deals from './Components/Deals/Deals'
import MarketoLogin from './Components/SignIn/Sign'
import AuthLayOut from './LayOut/AuthLayOut'
import MarketoSignup from './Components/SignUp/SignUp'
import VendorUplodedProductLayout from './LayOut/VendorUplodedProductLayout'
import ProductUploadForm from './Components/ProductUploadForm/ProductUploadForm'





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
        <Route path='/vendor/vendor-register' element={<Details/>}/>
        
         
         
        </Route>
        <Route path='/deals' element={<DealsLayOut/>} >
        <Route path='/deals/deals-products' element={<Deals/>}/>
          
        </Route>    
        {/* vendor uploaded product layOut */}
        <Route path="/vendor-upload-product-form" element={<VendorUplodedProductLayout/>}>
         <Route path="/vendor-upload-product-form" element={<ProductUploadForm/>}/>
        </Route>
         {/* auth  */}
         <Route path="/auth" element={<AuthLayOut/>}>
          <Route path="/auth/signin" element={<MarketoLogin/>}/>
          <Route path='/auth/signup' element={<MarketoSignup/>}/>
         </Route>
      </Routes>
     </BrowserRouter>
     </>
  )
}

export default App
