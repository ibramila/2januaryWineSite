import React from 'react'
import "./../assets/_login.scss"
function Login() {
  return (
    <div className='logRegPage'>
      <div className='register'>
        <h1> Register</h1>
        <form action="">
          <input type="text" placeholder='Name' required />
          <input type="text" placeholder='Surname' required />
          <input type="number" placeholder='Age' required />
          <input type="email" placeholder='Email' required />
          <input type="password" placeholder='Password' required />
          <input type="password" placeholder='Password again' required/>
          <input type="number" placeholder='Phone Number' required />
          <button type="submit" id="login-button">Sign Up</button>
        </form>
      </div>

    </div>
  )
}

export default Login