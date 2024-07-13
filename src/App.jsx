import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import Profile from "./components/Profile";
import Funzone from "./components/Funzone";
import { UserProvider } from "./components/UserContext";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/funzone" element={<Funzone />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
