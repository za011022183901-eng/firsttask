import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'








export default function Products() {



   const[products,setProducts]=useState([]) 
   

   


useEffect(function(){

getProducts()

},[])




async function getProducts(){



    let {data:{data}} = await axios(`https://ecommerce.routemisr.com/api/v1/products`)

       setProducts(data)    

         
         console.log(data);
         
         


}



   return <>
  
     {products.length>0 ?   <div className="container">

      <div className="row ">

       

       {products.map(product=>  <div key={product.id} className="col-md-3">

           <div className='p-2'> 

             <img src={product.imageCover} className='w-100' alt="" /> 
             <p className='ms-5 my-2'>  {product.title}  </p> 
            
            <h1></h1>
           
           </div>
        
         </div>)}
         


      </div>

     </div>
     
   : 
      <div className="vh-100 d-flex justify-content-center align-items-center">
            
          <i className='fas fa-spinner fa-spin fa-5x'></i>

      </div> }







   
    </>
}
