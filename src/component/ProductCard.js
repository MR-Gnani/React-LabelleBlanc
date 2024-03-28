import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const ProductCard = () => {
  return (
    <div className='cardBox'>
        <div className='imgWrap'>
            <img src="https://labelleblanc.com/web/product/big/202310/67cf0769b9e5b53547e0378c35d22ef5.jpg"/>
            <button className='faHeart'><FontAwesomeIcon icon={faHeart}/></button>
        </div>
    
        <div className='contentsCard'>
            <div className='contentsTitle'>
                <div>Guyenne Blouse</div>
                <div>New</div>
            </div>
            <div>잔느 블라우스</div>
            <div>₩111,100</div>
        </div>
    </div>
  )
}

export default ProductCard
