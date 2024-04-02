import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productActions';

const ProductAll = () => {

  const[query, setQuery] = useSearchParams();
  const productList = useSelector((state)=>state.product.productList)
  const dispatch = useDispatch();

  const getProducts = ()=>{
    let searchQuery=query.get('q')||"";
    dispatch(productAction.getProducts(searchQuery))
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
