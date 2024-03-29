import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

  const[query, setQuery] = useSearchParams();
  const[productList, setProductList] = useState([]);
  
  const getProducts = async()=>{
    let searchQuery=query.get('q')||"";
    console.log("쿼리", searchQuery);
    let url = `https://my-json-server.typicode.com/MR-Gnani/React-LabelleBlanc/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  useEffect(()=>{
    getProducts();
  },[query])

  return (
    <div className='bodyContainer'>
      <div className='productCardsWrap'>
        {productList.map((item)=> (
          <ProductCard key={item.id} item={item}/>
        ))}
      </div>
    </div>
    
  )
}

export default ProductAll
