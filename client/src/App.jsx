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
import Diary from './pages/Diary'
import { UserProvider } from "./components/UserContext";
import ProtectedRoute from "./PrivateRoute";
import Medications from './pages/Medications'

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
          <Route exact path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route exact path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
          <Route exact path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route exact path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route exact path="/funzone" element={<ProtectedRoute><Funzone /></ProtectedRoute>} />
          <Route exact path="/journal" element={<ProtectedRoute><Diary /></ProtectedRoute>} />
          <Route exact path="/medications" element={<ProtectedRoute><Medications /></ProtectedRoute>} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
