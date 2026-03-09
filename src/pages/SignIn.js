import React from "react";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="signin">
      <div className="signin__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button type="submit" className="signin__signInButton">
            Sign In
          </button>
        </form>
        <p>By signing in you agree to Amazon Clone Conditions of Use & Sale.</p>
        <button className="signin__registerButton">Create your Account</button>
      </div>
    </div>
  );
}

export default SignIn;