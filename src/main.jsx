import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthContextProvider from './Components/AuthContextProvider/AuthContextProvider'



const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
 <AuthContextProvider>
  <StrictMode>
   
    <App />
  
  </StrictMode>
  </AuthContextProvider>
  
  </QueryClientProvider>,
)
