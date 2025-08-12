import React from 'react'
import logo from '/logo.png'
import './LoginContainer.css'
import { useNavigate } from 'react-router';
function  LoginContainer({setLogin, setUser, user}) {
  const navigate= useNavigate();
  const handleUsername = (e) => {
    setUser(e.target.value);
  };
  return (
     <div className='login-page'>
        <header className="header">
          <img src={logo} alt="Logo" className="logo" />
        </header>
        <div className="login-container">
          <h1>Sign In</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            setLogin(true);
            navigate('/');  // Redirect to home page after login

            // Here you would typically handle authentication
            console.log("User logged in:", user);
          }}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" value={user} onChange={(e)=>{handleUsername(e)}} required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Sign In</button>
            <p className="register-link">
              Don't have an account? <a href="/register">Register</a>
            </p>
          </form>
        </div>
    </div>
  )
}

export default LoginContainer