"use client";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import puriImg from "../img/puri.jpeg";
import lornaImg from "../img/lorna.jpeg";
import mercyImg from "../img/mercy.jpeg";
import mosesImg from "../img/Moses.jpg";
import solaceImg from "../img/solace.jpg";
import lizImg from "../img/liz.jpeg";
import logoImg from "../img/logo.png";
import bulbImg from "../img/bulb.png";
import starriImg from "../img/starri.png";
import "./about.css";
import "./global.css";

const items = [
  {
    id: 1,
    name: "Purity Ogeke",
    designation: "Backend Developer",
    image: puriImg,
  },
  { id: 2, name: "Lorna", designation: "UIX Designer", image: lornaImg },
  { id: 3, name: "Mercy", designation: "Backend Developer", image: mercyImg },
  {
    id: 4,
    name: "Michael Moses",
    designation: "Gen AI Specialist",
    image: mosesImg,
  },
  {
    id: 5,
    name: "Solace Ngugi",
    designation: "Frontend Developer",
    image: solaceImg,
  },
  {
    id: 6,
    name: "Lizzie",
    designation: "Mentor",
    image: lizImg,
  },
];

export const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="tooltip-container"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                }}
                className="tooltip"
              >
                <div className="tooltip-name">{item.name}</div>
                <div className="tooltip-designation">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="image-container"
          />
        </div>
      ))}
    </>
  );
};

function About() {
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
          <Link to="/funzone">Funzone</Link>
          <Link to="/profile">PROFILE</Link>
        </div>
      </div>

      {/* LANDING PAGE */}
      <div className="landinggg">
        <div
          className="landingTexttt"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1>
            Exploring the essence of the{" "}
            <span style={{ color: "#512da8", fontSize: "5vw" }}>
              Elderly Companion?
            </span>
          </h1>
          <h3>"Get to know all about your companion..."</h3>
        </div>
        <div
          className="landingImageee"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <img src={bulbImg} alt="Bulb" className="doccc" />
        </div>
      </div>

      <div className="abouttt">
        <div
          className="aboutTexttt"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1>
            Starlets, an elite group of five specialists came up with a
            brilliant idea to make taking care of our seniors in the society
            very easy and in a modern way.{" "}
            <span style={{ color: "#512da8", fontSize: "3vw" }}>
              Incredibly effective!
            </span>
          </h1>
          <img
            src={starriImg}
            width="650"
            height="531"
            alt="Starlets Logo"
            className="star"
          />
        </div>
      </div>

      <div className="next" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="profileText">
          Meet our tech geniuses that made the Elderly App Companion possible.
          These are very innovative junior devs with{" "}
          <span style={{ color: "#512da8", fontSize: "2.9vw" }}>
            determination to bring amazing tech to life.
          </span>
        </h1>
      </div>

      <div className="tooltip-section">
        <AnimatedTooltip items={items} />
      </div>

      {/* FOOTER */}

      <div className="footers" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="foots">Contact Us</h1>
        <div className="flexSpace">
          <div className="text-center">
            <p className="text-foreground">Purity</p>
            <p className="text-primary underline">
              <a
                href="https://www.instagram.com/_purity_0?igsh=bjJrbHY5dmR5cHJw"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
              >
                <FontAwesomeIcon icon={faInstagram} /> _purity_0
              </a>
            </p>
            <p className="text-muted-foreground">
              <FontAwesomeIcon icon={faWhatsapp} /> +254 114 824 933
            </p>
            <p className="github">
              <a
                href="https://github.com/Petunia675"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> Petunia675
              </a>
            </p>
          </div>

          <div className="text-center">
            <p className="text-foreground">Lorna</p>
            <p className="text-primary underline">
              <a
                href="https://www.instagram.com/binti_ndela?igsh=bW15bDMyMWVlNmd0"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
              >
                <FontAwesomeIcon icon={faInstagram} /> lorna_Insta
              </a>
            </p>
            <p className="text-muted-foreground">
              <FontAwesomeIcon icon={faWhatsapp} /> +254 740 732 933
            </p>
            <p className="github">
              <a
                href="https://github.com/LornaKarungo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> LornaKarungo
              </a>
            </p>
          </div>

          <div className="text-center">
            <p className="text-foreground">Mercy</p>
            <p className="text-primary underline">
              <a
                href="https://www.instagram.com/binti_ndela?igsh=bW15bDMyMWVlNmd0"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
              >
                <FontAwesomeIcon icon={faInstagram} /> MERCY_Insta
              </a>
            </p>
            <p className="text-muted-foreground">
              <FontAwesomeIcon icon={faWhatsapp} /> +254 718 548 700
            </p>
            <p className="github">
              <a
                href="https://github.com/micymike"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> MERCYGIT
              </a>
            </p>
          </div>

          <div className="text-center">
            <p className="text-foreground">Moses</p>
            <p className="text-primary underline">
              <a
                href="https://www.instagram.com/m.k.u.u._.001/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
              >
                <FontAwesomeIcon icon={faInstagram} /> m.k.u.u._.001
              </a>
            </p>
            <p className="text-muted-foreground">
              <FontAwesomeIcon icon={faWhatsapp} /> +254 703 222 614
            </p>
            <p className="github">
              <a
                href="https://github.com/micymike"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> micymike
              </a>
            </p>
          </div>

          <div className="text-center">
            <p className="text-foreground">Solace</p>
            <p className="text-primary underline">
              <a
                href="https://www.instagram.com/ace_9en/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
              >
                <FontAwesomeIcon icon={faInstagram} /> ace_9en
              </a>
            </p>
            <p className="text-muted-foreground">
              <FontAwesomeIcon icon={faWhatsapp} /> +254 794 686 419
            </p>
            <p className="github">
              <a
                href="https://github.com/Vilacegen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> Vilacegen
              </a>
            </p>
          </div>

          <div className="text-center">
            <p className="text-foreground">Lizzie</p>
            <p className="text-primary underline">
              <FontAwesomeIcon icon={faInstagram} /> Lizzie_insta
            </p>
            <p className="text-muted-foreground">
              <FontAwesomeIcon icon={faWhatsapp} /> +254 734 096 796
            </p>
            <p className="github">
              <FontAwesomeIcon icon={faGithub} /> LizzieGit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
