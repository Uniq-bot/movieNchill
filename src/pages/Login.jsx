import React from 'react'
import LoginContainer from '../components/Login/LoginContainer'
function Login({ setLogin, setUser, user }) {
  return (
   <>
   <LoginContainer setLogin={setLogin} setUser={setUser} user={user} />
   </>
  )
}

export default Login