import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../img/logo.png";
import docImg from "../img/doc.png";
import docsImg from "../img/docs.webp";
import maxImg from "../img/max.png";
import chatImg from "../img/chat.avif";
import "./home.css";
import "./global.css";

function Baymax({ isOpen, handleIconClick }) {
  return (
    isOpen && (
      <div className="chat-modal">
        <iframe
          src="https://micymike-michaelmosesbot.hf.space"
          title="Chatbot"
          className="chat-iframe"
        ></iframe>
      </div>
    )
  );
}

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
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
          <Link to="/doctors">Doctors</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/appointments">Appointments</Link>
          <Link to="/community">Community</Link>
        </div>
      </div>

      <div className="landing">
        <div
          className="landingText"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1>
            Your trusted companion for a{" "}
            <span style={{ color: "#512da8", fontSize: "5vw" }}>
              Healthier Lifestyle.
            </span>
          </h1>
          <h3>"Healthcare Made Simple At your click."</h3>
        </div>
        <div
          className="landingImage"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <img src={docImg} alt="doctors" className="doc" />
        </div>
      </div>

      <div className="about">
        <div className="aboutText" data-aos="fade-up" data-aos-duration="1000">
          <h1>
            Experience the utmost care and support, ensuring the very{" "}
            <span style={{ color: "#512da8", fontSize: "3vw" }}>
              Best for you.
            </span>
          </h1>
          <img
            src={docsImg}
            width="650"
            height="531"
            alt="Doctors"
            className="docs"
          />
        </div>
        <div
          className="aboutList"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <ol>
            {[
              "Modern Technology",
              "Health Blogs",
              "Track your medicine",
              "Write your Journal",
              "Receive Notifications",
              "Plan your Calendar",
            ].map((item, index) => (
              <li key={index}>
                <span>{(index + 1).toString().padStart(2, "0")}</span>
                <p className="para">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="infoSection">
        <div className="infoHeader" data-aos="fade-up" data-aos-duration="1000">
          <h1>
            We Analyze Your Health States <br />
            <span style={{ color: "#512da8" }}>
              In Order To Top Our Services.
            </span>
          </h1>
        </div>
      </div>

      <div className="card-container">
        {[
          {
            title: "Taking care of the elderly",
            description:
              "Empowering elders with compassionate care and support, fostering independence and enhancing quality of life.",
          },
          {
            title: "Book your appointments",
            description:
              "Effortlessly manage your health: Book appointments with ease and convenience, ensuring you receive timely care and tailored to your needs.",
          },
          {
            title: "Interact with our Chatbot",
            description:
              "Engage with our chatbot and get instant help and personalized guidance at your fingertips, making health management simple and accessible.",
          },
        ].map((card, index) => (
          <div
            className="e-card playing"
            data-aos="fade-up"
            data-aos-duration="1000"
            key={index}
          >
            <div className="image"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="infotop">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="icon"
              >
                <path
                  fill="currentColor"
                  d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674 4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368 21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204 22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651 17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784 14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701 3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476 19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091 12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466 16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402 15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864 19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528 16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68 20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"
                ></path>
              </svg>
              <br />
              {card.title}
              <br />
              <div className="name">{card.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="banner">
        <div
          className="bannerText"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1>
            Have a chat with <span style={{ color: "#512da8" }}>Baymax</span>
            <br />
            <span
              style={{ fontSize: "1.6vw", fontWeight: "normal" }}
              className="bannerInnerText"
            >
              Stay informed and receive personalized medical assistance tailored
              just for you.
            </span>
            <span
              style={{ fontSize: "1.5vw", fontWeight: "normal" }}
              className="bannerInnerText"
            >
              <em>Click Image to start a chat with Baymax Ai</em>
            </span>
          </h1>

          <div className="chat-icon" onClick={handleIconClick}>
            <img src={maxImg} alt="Chatbot" className="icon" />
            <i className="fa fa-comment" />
          </div>
        </div>
        <Baymax isOpen={isOpen} handleIconClick={handleIconClick} />
        <div className="bannerImg" data-aos="fade-up" data-aos-duration="1000">
          <img src={chatImg} alt="Conversation" />
        </div>
      </div>

      <div className="footer">
        <h1>Elderly Companion</h1>
        <div className="footerlinks">
          <Link to="/home" className="mainlink">
            HOME
          </Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/doctors">DOCTORS</Link>
          <Link to="/journal">JOURNAL</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/profile">PROFILE</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
