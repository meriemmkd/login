import React from 'react'
import "./Login.css" 

const Login = () => {
  return (
    <div className="App">
    <div className="loginContainer">
      <h1>Sign in</h1>

      <div className="input-container">
        <label>Email </label>
        <input type="Email" name="uname" required />
        {/* {renderErrorMessage("uname")} */}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
        {/* {renderErrorMessage("pass")} */}
      </div>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
        {/* {renderErrorMessage("uname")} */}
      </div>

    

      <button className="loginBut">
        <p>Create account</p>
      </button>

      <button className="siG">
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
          alt="Trees"
          height="30"
        />
        <p>Sign in with Google</p>
        
      </button>
    </div>
  </div>
);
}
 

export default Login