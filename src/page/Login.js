import React from 'react'
import nLogo from '../naver.png';
import gLogo from '../github.png';
import kLogo from '../kakao.png'

const Login = () => {
  return (
    <div className='loginContainer'>
      <div className='loginBox'>
        <h1>Login</h1>
        <form className='loginForm'>
          <input type="text" name="username" placeholder='Id'/>
          <input type="password" name="password" placeholder='password'/>
          <label for="remember-check">
            <input type="checkbox" id="remember-check"/> 아이디 저장하기
          </label>
          <input type="submit" value="Login" className='submitInput'/>
          <div className='logo'>
            <img className="logoSize" src={nLogo} alt="im"/>
            <img className="logoSize" src={kLogo} alt="im"/>
            <img className="logoSize" src={gLogo} alt="im"/>
          </div>
          <span>소셜 로그인</span>
        </form>
        
      </div>
    </div>
  )
}

export default Login
