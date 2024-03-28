import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';

const ProductAll = () => {

  const[productList, setProductList] = useState([]);
  
  const getProducts = async()=>{
    let url = `https://my-json-server.typicode.com/MR-Gnani/React-LabelleBlanc/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    console.log("ddd", data);
  }

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <div className='bodyContainer'>
      <div className='productCardsWrap'>
        {productList.map((item)=> (
          <ProductCard item={item}/>
        ))}
      </div>
    </div>
    
  )
}

export default ProductAll
