import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ["ballet","outer","top","bottom","event"]
    const navigate = useNavigate();

    const logout = ()=>{
        navigate('/')
        setAuthenticate(false);
        setWidth(0); // 사이드 메뉴 숨기기
    }

    const goToLikePage = ()=>{
        navigate('/favorite')
        setWidth(0); // 사이드 메뉴 숨기기
    }

    const goToLoginPage = ()=>{
        navigate('/login');
        setWidth(0); // 사이드 메뉴 숨기기
    }

    const goToHomePage = ()=>{
        navigate('/')
        setWidth(0); // 사이드 메뉴 숨기기
    }

    const search = (e)=>{
        let inputValue = e.target.value;
        if (e.key === 'Enter') {
            navigate(`/?q=${inputValue}`);
        }
        setWidth(0); // 사이드 메뉴 숨기기
    }

    const category = (menu)=>{
        console.log("ㅇㅇㅇ");
        navigate(`/?q=${menu}`);
        setWidth(0); // 사이드 메뉴 숨기기
    }

    const showSideMenu = ()=>{
        setWidth(300);
    }
    let [width, setWidth] = useState(0);
    
    const hideSideMenu = () => {
          setWidth(0); // 사이드 메뉴 숨기기
      }
    
  return (
    <div>
        <div className='sideMenu' style={{width: width}}>
            <div className='closeBtn' onClick={hideSideMenu}>X</div>
            <div className='logoTitle'>LablleBlanc</div>
            <div className='login-button' onClick={authenticate? logout : goToLoginPage}>{authenticate ? 'Logout' : 'Login'}</div>
            <div className='flex'>
                <div className='login-button'>About us</div>
                <div className='login-button'>My Page</div>
            </div>
            <div className='flex'>
                <div className='login-button'>Cart</div>
                <div className='login-button' onClick={authenticate? goToLikePage : goToLoginPage}>Like</div>
            </div>
            <div className='unVisible'>Category</div>
            <div className='menuWrap'>
                <ul className='menuList category'>
                    {menuList.map(menu=><li key={menu} onClick={()=>category(menu)}>{menu}</li>)}
                </ul>
            </div>
        </div>
        <div className='topWrap'>
            <div className='searchInput'>
                <div className='showHide' id='Menu' onClick={showSideMenu}>Menu</div>
                <input type='text' onKeyUp={(e)=> search(e)} placeholder='검색어 입력'/>
                <button className='searchBtn'>search</button>
            </div>
            <div className='buttonArea'>
                <div className='login-button' onClick={authenticate? logout : goToLoginPage}>{authenticate ? 'Logout' : 'Login'}</div>
                <div className='login-button'>About us</div>
                <div className='login-button'>My Page</div>
                <div className='login-button'>Cart</div>
                <div className='login-button' onClick={authenticate? goToLikePage : goToLoginPage}>Like</div>
            </div>
        </div>
        <div className='titleWrap'>
            <div className='title' onClick={goToHomePage}>Labelle Blanc</div>
        </div>
        <div className='menuWrap'>
            <ul className='menuList'>
                {menuList.map(menu=><li key={menu} onClick={()=>category(menu)}>{menu}</li>)}
            </ul>
        </div>
    </div>
  )
}

export default Navbar
