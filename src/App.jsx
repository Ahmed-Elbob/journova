import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Brands from './Components/Brands/Brands';
import Products from './Components/Products/Products';
import Login from './Components/Login/Login ';
import Categories from './Components/Categories/Categories';
import Notfound from './Components/Notfound/Notfound';
import Register from './Components/Register/Register';
import CounterContextProvider from './Context/CounterContext'
import UserContextprovider from './Context/UserContext'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



let query = new QueryClient()

let x = createBrowserRouter([
{path:"", element:<Layout/>,children:[
{index:true,element:<ProtectedRoute><Home/></ProtectedRoute>},
{path:"cart",element:<ProtectedRoute><Cart/></ProtectedRoute>},
{path:"register",element:<Register/>},
{path:"brands",element:<ProtectedRoute><Brands/></ProtectedRoute>},
{path:"productdetails/:id/:category",element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
{path:"login",element:<Login/>},
{path:"products",element:<ProtectedRoute><Products/></ProtectedRoute>},
{path:"categories",element:<ProtectedRoute><Categories/></ProtectedRoute>},
{path:"*",element:<Notfound/>},

]}

])

export default function App() {
  

  return (
  <>


<UserContextprovider>
<CounterContextProvider>
  <QueryClientProvider client={query}> 
  <RouterProvider  router = {x}></RouterProvider>;
  <ReactQueryDevtools/>
  </QueryClientProvider>
</CounterContextProvider>
</UserContextprovider>




  
  
  
  </>
  
  

  
  
  )
   
  
}


