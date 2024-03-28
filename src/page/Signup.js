import React from 'react'
import nLogo from '../naver.png';
import gLogo from '../github.png';
import kLogo from '../kakao.png';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();
    const signUpUser = (e)=>{


        e.preventDefault();



        navigate("/login");
    }

    const goToLoginPage = ()=>{
        navigate("/login");
    }
  return (
    <div className='loginContainer'>
      <div className='loginBox'>
        <h1>Login</h1>
        <form className='loginForm' onSubmit={(e)=>signUpUser(e)}>
          <input type="text" name="username" placeholder='Id' required/>
          <input type="password" name="password" placeholder='password' required/>
          <input type="email" name="email" placeholder='labelleBlanc@gmail.com' required/>
          <input type="text" name="name" placeholder='name' required/>
          <label for="remember-check">
            <input type="checkbox" id="remember-check"/> 아이디 저장하기
          </label>
          <input type="submit" value="Sign Up" className='submitInput'/>
          <div className='signUp' onClick={goToLoginPage}>아이디가 있으신가요? Login Page </div>
          <div className='logo'>
            <img className="logoSize" src={nLogo} alt="im"/>
            <img className="logoSize" src={kLogo} alt="im"/>
            <img className="logoSize" src={gLogo} alt="im"/>
          </div>
          <span>소셜 회원가입</span>
        </form>
      </div>
    </div>
  )
}

export default Signup
