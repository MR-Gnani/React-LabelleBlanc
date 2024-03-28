import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';

const ProductAll = ({isLiked, setIsLiked}) => {

  const[productList, setProductList] = useState([]);
  
  const getProducts = async()=>{
    let url = `http://localhost:5000/products`;
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
