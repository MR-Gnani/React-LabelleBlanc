import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "Home", "sale", "지속가능성"]
    
  return (
    <div>
        <div className='topWrap'>
            <div className='searchInput'>
                <input type='text' placeholder='검색어 입력'/>
                <FontAwesomeIcon icon={faSearch}/>
            </div>
            <div className='login-button'>
                <FontAwesomeIcon icon={faUser}/>
                <div>Login</div>
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
