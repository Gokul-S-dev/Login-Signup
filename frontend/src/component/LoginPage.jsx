import React from 'react'
import './AuthPages.css';

const LoginPage = () => {
  return (
   <>
   <h1>Login Page</h1>
   <label for="Name">Name</label>
   <input type="text" id="Name"/>
   <label for="Password">Password</label>
   <input type="password" id="Password"/>
   <button>Submit</button>
   <button>Reset</button>
   </>
  )
}

export default LoginPage