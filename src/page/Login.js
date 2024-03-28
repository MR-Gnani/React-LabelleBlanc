import React from 'react'
import nLogo from '../naver.png';
import gLogo from '../github.png';
import kLogo from '../kakao.png';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {

  const navigate = useNavigate();

  const loginUser = (e)=>{
    e.preventDefault();
    setAuthenticate(true);
    navigate("/")
  };

  const signUp = ()=>{
    navigate("/signup")
  }

  return (
    <div className='loginContainer'>
      <div className='loginBox'>
        <h1>Login</h1>
        <form className='loginForm' onSubmit={(e)=>loginUser(e)}>
          <input type="text" name="username" placeholder='Id' required/>
          <input type="password" name="password" placeholder='password' required/>
          <label for="remember-check">
            <input type="checkbox" id="remember-check"/> 아이디 저장하기
          </label>
          <input type="submit" value="Login" className='submitInput'/>
          <div className='signUp' onClick={signUp}>Sign Up</div>
          <div className='logo'>
            <img className="logoSize" src={nLogo} alt=""/>
            <img className="logoSize" src={kLogo} alt=""/>
            <img className="logoSize" src={gLogo} alt=""/>
          </div>
          <span>소셜 로그인</span>
        </form>
      </div>
    </div>
  )
}

export default Login
