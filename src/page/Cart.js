import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';

const Cart = () => {

  const[productList, setProductList] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

  // 로컬 저장소에서 모든 항목을 가져오는 함수
  const getAllItemsFromLocalStorage = () => {
    const allItemKeys = Object.keys(localStorage).filter(key => key.startsWith('likedItem_'));
    const items = allItemKeys.map(key => {
      const id = key.replace('likedItem_', ''); // 'likedItem_' 부분을 제거하여 아이템 id를 추출
      const isLiked = JSON.parse(localStorage.getItem(key)); // 좋아요 상태를 가져옴
      return { id, isLiked };
    });
    return items;
  };

  // 좋아요 상태가 true인 아이템만 필터링하는 함수
  const filterLikedItems = items => items.filter(item => item.isLiked);
  
  const getProducts = async()=>{
    let url = `https://my-json-server.typicode.com/MR-Gnani/React-LabelleBlanc/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("ddd", data);
    setProductList(data);
  }

  // 상태 갱신 함수
  const updateLikedItems = () => {
    const items = getAllItemsFromLocalStorage();
    const likedItems = filterLikedItems(items);
    setLikedItems(likedItems);
  };

  useEffect(()=>{
    getProducts();
    updateLikedItems();
  },[]);

  useEffect(()=>{
    // 좋아요 상태가 변경될 때마다 로컬 저장소에서 좋아요된 상품들을 다시 가져옴
    updateLikedItems();
  },[likedItems]);


  return (
    <div className='bodyContainer'>
      <div className='productCardsWrap'>
      {productList.map(item => {
      if (likedItems.some(likedItem => parseInt(likedItem.id) === item.id)) {
        return <ProductCard key={item.id} item={item} />;
      }
      return null;
    })}
      </div>
    </div>
  )
}

export default Cart
