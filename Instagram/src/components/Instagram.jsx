import React, { useState } from 'react';
import InstaLogo from '../assets/insta.svg';
import '../App.css';

function Instagram() {
    const [register, setRegister] = useState(true);
  return (
    <form className="form">
      <img src={InstaLogo} alt="Instagram-Logo" />
      {register ? (
        <>
          <input type="text" placeholder="Phone number, username or email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
          <p>
            Don't have account?{" "}
            <a onClick={() => setRegister(false)} href="#">
              Sign up
            </a>
          </p>
        </>
      ) : (
        <>
          <input type="email" placeholder="Mobile number or email" />
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Phone number, username or email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
          <p>have an account? <a onClick={() => setRegister(true)} href="#">Log in</a></p>
        </>
      )}
    </form>
  );
}

export default Instagram