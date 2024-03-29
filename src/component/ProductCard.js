import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const[isLiked, setIsLiked] = useState(false);

    const showDetail = ()=>{
        navigate(`/product/${item?.id}`);
    }

    useEffect(() => {
        const likedItem = localStorage.getItem(`likedItem_${item.id}`);
        if (likedItem) {
            setIsLiked(JSON.parse(likedItem));
        }
        console.log(JSON.parse(likedItem)); // 상태가 변경될 때마다 최신 상태를 콘솔에 출력
    }, [item.id]); // isLiked 상태가 변경될 때만 useEffect가 실행되도록 설정

    const handleLikeClick = (e)=>{
        e.stopPropagation(); // 이벤트 버블링 방지
        setIsLiked(!isLiked);
        // 로컬 스토리지에 좋아요 상태 저장
        localStorage.setItem(`likedItem_${item.id}`,JSON.stringify(!isLiked));
    }

  return (
    <div className='cardBox' onClick={showDetail}>
        <div className='imgWrap'>
            <img src={item?.img} alt=''/>
            <button className='faHeart' onClick={handleLikeClick}>
                <FontAwesomeIcon icon={isLiked? faSolidHeart : faHeart} color={isLiked ? 'red' : 'white'}/>
            </button>
        </div>
        <div className='contentsCard'>
            <div className='contentsTitle'>
                <div className='itemTitle'>{item?.title}</div>
                <div>{item?.new === true ? "New":""}</div>
            </div>
            <div>₩{item?.price}</div>
        </div>
    </div>
  )
}

export default ProductCard
