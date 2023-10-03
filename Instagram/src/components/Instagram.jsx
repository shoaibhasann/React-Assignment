import React, { useState } from 'react';
import InstaLogo from '../assets/insta.svg';
import '../App.css';

function Instagram() {
    const [register, setRegister] = useState(true);
  return (
    <div className='form__container'>
      <form className="form">
        <img src={InstaLogo} alt="Instagram-Logo" />
        {register ? (
          <div className='form__inputs'>
            <input type="text" placeholder="Phone number, username or email" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
            <p>
              Don't have account?{" "}
              <a onClick={() => setRegister(false)} href="#">
                Sign up
              </a>
            </p>
          </div>
        ) : (
          <div className='form__inputs'>
            <input type="email" placeholder="Mobile number or email" />
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Phone number, username or email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
            <p>
              have an account?{" "}
              <a onClick={() => setRegister(true)} href="#">
                Log in
              </a>
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Instagram