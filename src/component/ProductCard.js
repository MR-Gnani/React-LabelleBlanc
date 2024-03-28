import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({item}) => {
    const [isLiked, setIsLiked] = useState(false);
    const handleLikeClik = ()=>{
        setIsLiked(!isLiked);
    }

  return (
    <div className='cardBox'>
        <div className='imgWrap'>
            <img src={item?.img}/>
            <button className='faHeart' onClick={handleLikeClik}>
                <FontAwesomeIcon icon={isLiked? faSolidHeart : faHeart} color={isLiked ? 'red' : 'white'}/>
            </button>
        </div>
        <div className='contentsCard'>
            <div className='contentsTitle'>
                <div>{item?.title}</div>
                <div>{item?.new === true ? "New":""}</div>
            </div>
            <div>{item?.choice === true ? "Conscious Choice" : ""}</div>
            <div>₩{item?.price}</div>
        </div>
    </div>
  )
}

export default ProductCard
