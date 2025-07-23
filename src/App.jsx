import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './Components/Home/Home'
import About from './Components/About/About.jsx'
import Gallary from './Components/Gallary/Gallary.jsx'

import Parent from './Components/Parent/Parent.jsx'
import Products from './Products/Products.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'




 const routers = createBrowserRouter(
  
  [
   {path:'/' , element:<Layout/>, children:[ {path:'/home' , element: <Home/> },
 {path:'/About' , element: <About/>  } ,
 {index:true , element:   <Parent/> },
 {path:'/Products' , element:  <Products/>},
 {path:'/Gallary', element:   <Gallary/>},
 {path:'*', element:   <Notfound/>},
] },
  ]



)


function App() {

  return (
    <>
   
      <RouterProvider router={routers} ></RouterProvider>
       

      </>
  )
}

export default App
