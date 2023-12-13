import React from 'react'

function Login() {
  return (
    <>
      <div className='mainloginpage'>
        <div className='loginsec1'>
        </div>
        <div className='loginsec2'>
          <div className='loginform1'>
            <div className='loginform2'>
              <h2>Login Here</h2>
              <form>
                <input type='email' placeholder='Enter Your Email' /><br /><br />
                <input type='password' placeholder='Enter Your Password' />
                <button className='loginbtn'>submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login