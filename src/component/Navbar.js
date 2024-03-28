import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    const menuList = ["Ballet","Outer","Top","Bottom","Event"]
    
  return (
    <div>
        <div className='topWrap'>
            <div className='searchInput'>
                <input type='text' placeholder='검색어 입력'/>
                <FontAwesomeIcon icon={faSearch}/>
            </div>
            <div className='buttonArea'>
                <div className='login-button'>Login</div>
                <div className='login-button'>About us</div>
                <div className='login-button'>Mypage</div>
                <div className='login-button'>Cart</div>
            </div>
            

        </div>
        <div className='titleWrap'>
            <div className='title'>Labelle Blanc</div>
        </div>
        <div className='menuWrap'>
            <ul className='menuList'>
                {menuList.map(menu=><li>{menu}</li>)}
            </ul>
        </div>
    </div>
  )
}

export default Navbar
