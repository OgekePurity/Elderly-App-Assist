import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../img/logo.png";
import blankImg from "../img/blank.png";
import "./profile.css";
import "./global.css";

function Profile() {
  return (
    <div className="wrapper">
      <div className="nav">
        <div className="logo">
          <img src={logoImg} alt="logo" />
        </div>
        <div className="links">
          <Link to="/home" className="mainlink">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/appointments">Appointments</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/journal">Journal</Link>
        </div>
      </div>

      {/* PROFILE CARD */}
      <div className="cardinal">
        <div className="blanky">
          <img src={blankImg} alt="MY PROFILE" />
        </div>

        <div className="holderr">
          <div className="words">My Email:</div>
          <div className="actual">solaceacegen@gmail.com</div>
        </div>

        <div className="cardd">
          <div className="heada">Health Status</div>
          <div className="bodi">
            <div className="skill">
              <div className="skill-name">HEART</div>
              <div className="skill-level">
                <div className="skill-percent" style={{ width: "90%" }}></div>
              </div>
              <div className="skill-percent-number">72 BPM</div>
            </div>
            <div className="skill">
              <div className="skill-name">SUGAR LEVEL</div>
              <div className="skill-level">
                <div className="skill-percent" style={{ width: "80%" }}></div>
              </div>
              <div className="skill-percent-number">80%</div>
            </div>
            <div className="skill">
              <div className="skill-name">OVERALL</div>
              <div className="skill-level">
                <div className="skill-percent" style={{ width: "75%" }}></div>
              </div>
              <div className="skill-percent-number">85%</div>
            </div>
          </div>
        </div>

        {/* ADD DELETE BUTTON BELOW THIS LINE */}
        <button className="Btnn">
          <div className="signn">
            <svg
              viewBox="0 0 16 16"
              className="bi bi-trash3-fill"
              fill="currentColor"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"></path>
            </svg>
          </div>

          <div className="textt">Delete</div>
        </button>
      </div>
    </div>
  );
}

export default Profile;
