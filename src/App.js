import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetails from './page/ProductDetails';
import Navbar from './component/Navbar';

//1. 전체상품, 로그인, 상품 상세 페이지
//2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지 호출
//4. 상품 디테일을 눌렀을때, 로그인이 되어 있지 않다면 로그인 페이지 호출
//5. 로그인이 되어 있다면, 상품 디테일 페이지 호출
//6. 로그아웃버튼을 클릭하면, 로그아웃 처리
//7. 로그아웃 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 해야함.
//8. 로그인/로그아웃 (토글)
//9. 상품 검색

function App() {
  return (
    <div className='mainPage'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
