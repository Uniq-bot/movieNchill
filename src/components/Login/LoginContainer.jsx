import React, { useEffect, useState } from 'react';
import logo from '/logo.png';
import './LoginContainer.css';
import { useNavigate } from 'react-router';
function LoginContainer({ setLogin, setUser, user }) {
  const [ConfirmPass, setConfirmPass] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setpass] = useState('')
const [regi, setRegi] = useState(() => {
  const saved = localStorage.getItem("regi");
  return saved ? JSON.parse(saved) : false;
});


// Whenever regi changes, save to localStorage

  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUser(e.target.value);
  };

  const handleRegister = () => {
    setRegi(!regi);
  };
  const handleSubmit=()=>{
    if(regi){
      if(pass!==ConfirmPass){
        alert('confirm pass doesnt match')
      }
      else{
        setLogin(true)
        navigate('/')
      }
    }
    else{
       setLogin(true)
        navigate('/')
    }
    
  }

  return (
    <div className="login-page">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
      </header>

      <div className="login-container">
        <h1>{regi ? 'Register' : 'Sign In'}</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit()
            console.log("User logged in:", user);
          }}
        >
          <div className="input-group">
             {regi && (
             <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
               value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                required
              />
            </div>
          )}
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={user}
              onChange={handleUsername}
              required
            />
          </div>
         
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={pass} onChange={(e)=>{setpass(e.target.value)}} required />
          </div>
          {regi && (
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                value={ConfirmPass}
                onChange={(e)=>{setConfirmPass(e.target.value)}}
                required
              />
            </div>
          )}

          <button type="submit">{regi ? 'Register' : 'Sign In'}</button>

          {regi? (
          <p className="register-link">
              Do you have an account?{" "}
              <span onClick={handleRegister} style={{ cursor: "pointer", color: "blue" }}>
                Signup
              </span>
            </p>
          ):  
            <p className="register-link">
              Don't have an account?{" "}
              <span onClick={handleRegister} style={{ cursor: "pointer", color: "blue" }}>
                Register
              </span>
            </p>
             }
        </form>
      </div>
    </div>
  );
}

export default LoginContainer;
