import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import pp1 from "../images/Me1.png";
function Banner() {
  const [infoMe, setInfoMe] = useState({
    title: "Hi, I'm Aditya Sharma",
    text: "I'm an enthusiast and inspiring web developer",
    image: pp1,
  });
  const [smLogo, setSmLogo] = useState([
    {
      logo: <FaGithub />,
    },
    {
      logo: <FaTwitter />,
    },
    {
      logo: <FaInstagram />,
    },
    {
      logo: <FaLinkedinIn />
    }
  ]);
  return (
    <div className="header" id="banner">
      <div className="row">
        <div className="header__section">
          <ul className="header__ul">
            {smLogo.map((logo, index) => {
              return <li key={index}>{logo.logo}</li>;
            })}
          </ul>
          <div className = "typed_out">
            <h1 className="banner__header">{infoMe.title}</h1>
          </div>
          <p>{infoMe.text}</p>
          <div className="header__buttons">
            <a
              href="https://drive.google.com/file/d/138Q46I6nlnYJviJ-I8U3xjqkT4kBmHpn/view?usp=sharing"
              target="__blank"
              className="btn btn-outline"
            >
              Resume
            </a>
          </div>
        </div>
        {/* <div className="col-6">
          <div className="banner__img">
            <img src={infoMe.image} alt="pp" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
