import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productAction } from '../redux/actions/productActions';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const product = useSelector((state)=>state.product.selectedItem)

  // 파라미터 값 가져오기
  let{id} = useParams();

  // API 데이터 State에 담기
  // const[product, setProduct] = useState(null);

  // 상품상세 API 가져오기
  const getProductDetail= async()=>{
    dispatch(productAction.getProductDetail(id));
  }

  // API는 항상 useEffect
  useEffect(()=>{
    getProductDetail();
  },[])

  return (
    <div className='bodyContainer'>
      <div className='detailsWrap'>
        <div className='detailImgWrap'>
          <img src={product?.img} alt=""/>
        </div>
        <div className='detailInfoWrap'>
          <div className='detailTitle'> {product?.title} </div>
          <div className='detailPrice'> {product?.price} 원 </div>
          <select className='detailSelect'>
            <option value="" disabled selected> - [필수] 옵션을 선택해주세요</option>
          </select>
          <div className='resultArea'>TOTAL : 0원 (0개) </div>
          <div className='btnArea'>
            <div className='btn-add'>ADD CART</div>
            <div className='btn-buy'>BUY NOW</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
