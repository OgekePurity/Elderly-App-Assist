import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import logoImg from "../img/logo.png";
import triviaImg from "../img/trivia.png";
import paddImg from "../img/padd.png";
import ticImg from "../img/tic.webp";
import motoImg from "../img/moto.jpeg";
import subwayImg from "../img/subway.webp";

import "./funzone.css";
import "./global.css";

function Funzone() {
  const openSubwaySurfers = () => {
    window.open("https://classwork.cc/subway-surfers-unblocked/", "_blank");
  };

  const openMoto = () => {
    window.open("https://classwork.cc/moto-x3m-unblocked/", "_blank");
  };

  const openTrivia = () => {
    window.open("https://micymike-auto-quiz.hf.space", "_blank");
  };

  const openTictac = () => {
    window.open("https://micymike-starlets-tictactoe.hf.space", "_blank");
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
          <Link to="/journal">JOURNAL</Link>
          <Link to="/funzone">FUNZONE</Link>
          <Link to="/profile">PROFILE</Link>
        </div>
      </div>

      {/* LANDING PAGE */}
      <div className="llandinggg">
        <div
          className="llandingTexttt"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1>
            Keep Your Mind Active with{" "}
            <span style={{ color: "#512da8", fontSize: "5vw" }}>Fun Games</span>
          </h1>
          <h3>
            "Enjoy interactive challenges designed to enhance your mental
            agility."
          </h3>
        </div>
        <div
          className="llandingImageee"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <img src={paddImg} alt="GamePad" className="ddoccc" />
        </div>
      </div>

      {/* TRIVIA QUESTIONS */}
      <div className="abouttt">
        <div
          className="aboutTexttt"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1>
            Test Your Knowledge: Dive into our interactive trivia game and
            challenge yourself with a wide range of intriguing questions on
            various topics. Discover fun facts, beat your highscores and{" "}
            <span style={{ color: "#512da8", fontSize: "3vw" }}>
              enjoy sharpening your mind!
            </span>
          </h1>
          <img
            src={triviaImg}
            width="650"
            height="531"
            alt="Trivia Image"
            className="triviaa"
          />

          <button className="playbutton" onClick={openTrivia}>
            <FontAwesomeIcon icon={faGamepad} />
            Play Now
            <div className="arrow">››</div>
          </button>
        </div>
      </div>

      {/* TICTACTOE */}
      <div className="ticlanding">
        <div
          className="ticlandingText"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1>
            Enjoy strategic fun and test your skills in this timeless battle of{" "}
            <span style={{ color: "#512da8", fontSize: "5vw" }}>
              Xs and Os!
            </span>
          </h1>
          <h3>"It's your turn, make your move😉"</h3>
        </div>
        <div
          className="ticlandingImage"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img src={ticImg} alt="TicTacToe Image" className="ticdoc" />
          <button className="ticplaybutton" onClick={openTictac}>
            <FontAwesomeIcon icon={faGamepad} />
            Play Now
            <div className="arrow">››</div>
          </button>
        </div>
      </div>

      {/* SUBWAY SURFERS */}
      <div className="abouttt">
        <div
          className="aboutTexttt"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1>
            Run, jump, and surf your way through vibrant landscapes, collecting
            coins and power-ups along the way. Dodge trains, evade obstacles,
            and challenge your reflexes in this high-speed,{" "}
            <span style={{ color: "#512da8", fontSize: "3vw" }}>
              endless runner adventure!
            </span>
          </h1>
          <img
            src={subwayImg}
            width="650"
            height="531"
            alt="Subway surfers game logo"
            className="subway"
          />

          <button className="subplaybutton" onClick={openSubwaySurfers}>
            <FontAwesomeIcon icon={faGamepad} />
            Play Now
            <div className="arrow">››</div>
          </button>
        </div>
      </div>

      {/* MOTORCROSS */}
      <div className="ticlanding">
        <div
          className="ticlandingText"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1>
            Perform daring stunts and race through challenging tracks on your
            motorcycle.{" "}
            <span style={{ color: "#512da8", fontSize: "5vw" }}>
              motocross adventure!
            </span>
          </h1>
          <h3>"Vroom vroom"</h3>
        </div>
        <div
          className="ticlandingImage"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img src={motoImg} alt="MotoX3M Image" className="motodoc" />
          <button className="motoplaybutton" onClick={openMoto}>
            <FontAwesomeIcon icon={faGamepad} />
            Play Now
            <div className="arrow">››</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Funzone;
