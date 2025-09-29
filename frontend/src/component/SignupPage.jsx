import React from 'react'

const SignupPage = () => {
  return (
    <>
    <h1>Signup Page</h1>
    <label htmlFor="">Name</label>
    <input type="text" placeholder='Enter your name '/>
      <br/><br/>
    <label htmlFor="">E-mail</label>
    <input type="text" placeholder='Enter your mail id'/>
     <br/><br/>
     <label htmlFor="">Password</label>
     <input type="text" placeholder='Enter your password'/>
     <br/><br/>
    <label htmlFor="">Re-Password</label>
     <input type="text" placeholder='Enter your password again'/>
     <br/><br/>
     <button >Submit</button>
     <button>Reset</button>  


    </>
  )
}

export default SignupPage