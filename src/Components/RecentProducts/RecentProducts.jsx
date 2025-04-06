import React, { useState } from 'react'
import style from "./RecentProducts.module.css"
import axios from 'axios'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';


export default function RecentProducts() {

  function getProducts(){
return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)

  }


let {data, isError ,error, isLoading , isFetching} = useQuery({

  queryKey:["recentProduct"],
  queryFn:getProducts,
staleTime : 100000

})
//console.log(data.data.data);

if(isError){
  return <h3>{error}</h3>
}

if(isLoading){
return <div className='spinner'></div>
}


 /* const [products, setproducts] = useState([])

  function getProducts(){
    axios.get('https://ecommerce.routemisr.com/api/v1/products')
    .then((res)=>{
      setproducts(res.data.data);
    })
    .catch((res)=>{})

  }
  useEffect(()=>{
    getProducts()
  },[])*/


  return (
<>

<div className="row">
     {data?.data?.data.map((product)=>  (<div key={product.id} className='w-full md:w-1/3 lg:w/4 xl:w-1/6'>

<div className="product p-2  ">
<Link to={`productdetails/${product.id}/${product.category.name}`}>
<img src={product.imageCover} className='w-full' alt="" />
<h3 className=' text-emerald-400'>{product.category.name}</h3>
<h3 className='font-semibold '>{product.title.split(" ").slice(0,2).join(" ")}</h3>
<div className='flex justify-between p-3'>
  <span>{product.price} EGP</span>
  <span><i className='fas fa-star text-yellow-400'></i> {product.ratingsAverage}</span>
</div>
</Link>
<button className='btn'>Add To Cart</button>
</div>
</div>
     ))
     }
 </div>
     
</>
  );
}
