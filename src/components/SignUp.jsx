import React, { useEffect, useContext } from "react";
import{ useState } from 'react'
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../redux/Slices/authSlice";
import "./signup.css";
import "./global.css";


export default function SignUp() {
  const dispatch = useDispatch();
  const { status, authError, accessToken, refreshToken} = useSelector((state) => state.auth);
  const { setEmail } = useContext(UserContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmaill] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Add this line
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const errorBoxRef = useRef(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmaill(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (status === "succeeded1") {
      navigate("/home");
      setEmail(email); 

    } else if (status === "failed") {
      setError(authError);
    }
  }, [status, authError, navigate, email, setEmail]);

  useEffect(() => {
    if (status === "succeeded2") {
      
      navigate("/home");

    } else if (status === "failed") {
      setError(authError);
    }
  }, [status, authError, navigate]);

  

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

  const handleCreateAccount = async (event) => {
    event.preventDefault();
    dispatch(registerUser({ name, email, password }));
    
  };


  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch(loginUser({ email: loginEmail, password: loginPassword }));
    const email = event.target["login-email"].value;
    setEmail(email);
    
  };
  
  useEffect(() => {
    if (accessToken) {
      console.log("Access Token:", accessToken );

      setError(null);
    }
  }, [accessToken]);

  useEffect(() => {
    if (refreshToken) {

      console.log("Refresh Token:", refreshToken );

      setError(null);
    }
  }, [refreshToken]);

  return (
    <div className="signup-page">
      <div className="container" id="container">
        
        <div className="form-container sign-up">
          <form onSubmit={handleCreateAccount}>
            <h1>Create Account</h1>
            <div className="social icons">
              {/* This part is useless but without it the code doesn't run */}
            </div>
            <span>Use your email for registration</span>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={handleNameChange}
            ></input>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="youremail@gmail.com"
              value={email}
              onChange={handleEmailChange}
            ></input>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            ></input>
            <button className="btnbtn">Create Account</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleLogin}>
            <h1 className="head">Login</h1>
            <div className="social-icons">
              {/* This part is useless but without it the code doesn't run */}
            </div>
            <span className="span">Use your email for registration</span>
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              placeholder="youremail@gmail.com"
              value={loginEmail}
              onChange={(event) => setLoginEmail(event.target.value)}
            ></input>
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(event) => setLoginPassword(event.target.value)}
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
