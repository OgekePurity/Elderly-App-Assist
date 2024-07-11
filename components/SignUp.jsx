import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import "./global.css";

export default function SignUp() {
  const navigate = useNavigate();

  useEffect(() => {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    const handleRegisterClick = () => {
      container.classList.add("active");
    };

    const handleLoginClick = () => {
      container.classList.remove("active");
    };

    if (registerBtn) {
      registerBtn.addEventListener("click", handleRegisterClick);
    }

    if (loginBtn) {
      loginBtn.addEventListener("click", handleLoginClick);
    }

    return () => {
      if (registerBtn) {
        registerBtn.removeEventListener("click", handleRegisterClick);
      }
      if (loginBtn) {
        loginBtn.removeEventListener("click", handleLoginClick);
      }
    };
  }, []);

  const handleCreateAccount = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    navigate("/home"); // Redirect to home page
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    navigate("/home"); // Redirect to home page
  };

  return (
    <div className="signup-page">
      <div className="container" id="container">
        <div className="form-container sign-up">
          <form onSubmit={handleCreateAccount}>
            <h1>Create Account</h1>
            <div className="social icons">{/* Social icons */}</div>
            <span>Use your email for registration</span>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your Name"></input>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="youremail@gmail.com"
            ></input>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password"></input>
            <button className="btnbtn">Create Account</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleLogin}>
            <h1 className="head">Login</h1>
            <div className="social-icons">{/* Social icons */}</div>
            <span className="span">Use your email for registration</span>
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              placeholder="youremail@gmail.com"
            ></input>
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              placeholder="Password"
            ></input>
            <button className="loginbtn">Login</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of the site features</p>
              <button className="hidden" id="login">
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="hidden" id="register">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
