import React from 'react';
import './Loginsignup.css';

const Loginsignup = () => {
  return (
    <div className='login-signup'>
      <div className='login-container'>
        <h1>Sign up</h1>
        <div className='Signupfield'> 
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Password' />
        </div>
        <div className='Button'>
          <button>Continue</button>
          <p>Already Have An Account? <span>Login Here</span></p>
        </div>
        <div className='agree'>
          <input type='checkbox' /> By Continuing, I agree to the terms of use & privacy policy
        </div>
      </div>
    </div>
  );
}

export default Loginsignup;

