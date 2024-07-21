import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import logoImg from "../img/logo.png";
import blankImg from "../img/blank.png";
import "./profile.css";
import "./global.css";

function Profile() {
  const { email, setEmail } = useContext(UserContext);
  const navigate = useNavigate();

  const handleDelete = () => {
    setEmail("");
    navigate("/"); // Navigate to the Login/Signup page
  };

  const Appointment = () => {
    window.open("https://auto-notification-2.onrender.com", "_blank");
  };

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
          <Link to="/blog">Blog</Link>
          <Link to="/funzone">FUNZONE</Link>
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
          <div className="actual">{email}</div>
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

        {/* DELETE BUTTON */}
        <button className="Btnn" onClick={handleDelete}>
          <div className="signn">
            <FontAwesomeIcon icon={faTrashAlt} className="bi bi-trash3-fill" />
          </div>
          <div className="textt">Delete Profile</div>
        </button>

        {/* FORM SUBMISSION */}
        <div className="form-containerr">
          <form
            className="formm"
            action="https://formspree.io/f/xldrddbn"
            method="POST"
          >
            <div className="form-groupp">
              <label htmlFor="email">Your Email</label>
              <input
                required
                name="email"
                id="email"
                type="text"
                placeholder="youremail@gmail.com"
              />
            </div>
            <div className="form-groupp">
              <label htmlFor="textarea">How Can We Help You?</label>
              <textarea
                required
                cols="50"
                rows="10"
                id="textarea"
                name="textarea"
              ></textarea>
            </div>
            <button type="submit" className="form-submit-btnn">
              Submit
            </button>
          </form>
        </div>

        {/* BOOK APPOINTMENT BUTTON */}
        <button className="appbutton" onClick={Appointment}>
          <span className="appbutton-content">Book Appointment</span>
        </button>
      </div>
    </div>
  );
}

export default Profile;
