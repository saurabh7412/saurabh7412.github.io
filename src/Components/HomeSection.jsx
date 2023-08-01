import { color } from "framer-motion";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import profile from "../images/profile2.jpg";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";
import mobile from "../images/mobile.png";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { Button, IconButton, Image } from "@chakra-ui/react";
import { DownloadIcon, EmailIcon, PhoneIcon, ViewIcon } from "@chakra-ui/icons";
import resume from "../images/Saurabh-Bhatt-Resume.pdf";

const HomeSection = () => {
  const handleClick = () => {
    window.open(
      `https://drive.google.com/file/d/19RW0qYZv-9deVv_dgljMndNBcLL6z6BD/view`,
      "_blank",
      "noopener",
      "noreferer"
    );
  };
  return (
    <div id="home">
      <DIV>
        <div id="#home">
          <h1>
            <span style={{ color: "white" }}> Hello , My Name is </span>
            <br />
            <span
              style={{ fontSize: "60px", color: "#04aa6d" }}
              id="user-detail-name"
            >
              SAURABH BHATT
            </span>
          </h1>
          <TypeAnimation
            sequence={[
              `A Full Stack Web Developer`, // Types 'One'
              1500, // Waits 1s
              "A MERN Developer",
              1500,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "40px",
              display: "inline-block",
              fontFamily: "monospace",
              color: "#04aa6d",
              fontWeight: "bold",
              marginLeft: "100px",
            }}
          />
          <div className="link-1">
            <a
              href="https://www.linkedin.com/in/saurabh7412/"
              title="LinkedIn Profile"
              target="_blank"
            >
              <img src={linkedin} />
            </a>
            <a
              href="https://github.com/saurabh7412"
              target="_blank"
              title="Github"
            >
              <img src={github} />
            </a>
            <a href="mailto:saurabh7412@gmail.com" title="Email">
              <img src={email} />
            </a>
            <a href="tel:+919810295216" title="Mobile">
              <img src={mobile} />
            </a>
          </div>

          <div className="link-2">
            <button id="resume-button-2" onClick={handleClick}>
              <a id="resume-link-2" href={resume} download>
                Resume <ViewIcon style={{ marginLeft: "10px" }} />
              </a>
            </button>
          </div>
        </div>
        {/* <div>
        <img src={profile} class="home-img" />
        </div> */}

        <div class="container">
          <div class="box">
            <div class="spin-container">
              <div class="shape">
                <div class="bd">
                  <img src={profile} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DIV>
    </div>
  );
};

export default HomeSection;

const DIV = styled.div`
  background-color: rgb(15, 22, 36);
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  text-align: left;
  padding-right : 20px;

  #home {
    border : 1px solid red;

  }

  .link-2 {
    width: 25%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin-left: 70px;
  }
  .link-2 button {
    background-color: #04aa6d;

    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
    font-family: revert;

    background-color: #04aa6d;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 22px;
    padding: 10px 20px;

    border: 1px solid #04aa6d;
    box-shadow: rgba(150, 150, 150, 0.45) 0px 5px 10px;
    border-radius: 10px;
  }

  .link-2 button:hover {
    cursor: pointer;
    scale: 1.1;
    transition: 600ms;
    background-color: #212121;
  }

  .link-2 a {
    color: white;
    text-decoration: none;
  }

  .link-2 a:hover {
    color: #04aa6d;
  }

  ${
    "" /* img {
    border-radius: 50%;
    margin-right: 100px;
    margin-top: 130px;
    margin-bottom: 130px;
  }
  img:hover {
    cursor: pointer;
    scale: 1.2;
    transition: 700ms;
  } */
  }
  h1 {
    margin-left: 100px;
    text-align: start;
  }

  a {
    ${"" /* border : 1px solid green ; */}
    width:24.5%;
  }

  .link-1 {
    ${"" /* border : 1px solid red ; */}
    margin : auto;
    margin-top: 60px;
    width: 50%;
    height: 100px;
    display: flex;
    margin-left: 70px;
    margin-bottom: 20px;
  }
  .link-1 img {
    ${"" /* border : 1px solid blue ; */}
    background-color :  #04aa6d;
    width: 35%;
    margin: auto;
    padding: 10px;

    border: 1px solid #04aa6d;
    box-shadow: rgba(150, 150, 150, 0.45) 0px 5px 10px;
    border-radius: 10px;
  }
  .link-1 img:hover {
    scale: 1.2;
    transition: 500ms;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    h1 {
      text-align: start;
    }
    img {
      width: 70%;
      margin: auto;
      margin-top: 30px;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1900px) {
  }





  .container {
    ${'' /* border : 1px solid red; */}
    width : 80%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .box {
    width: 60vmin;
    height: 60vmin;
    /*   border: 1px dashed rgba(255,255,255,0.4); */
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: 50%;
      /*     border: 1px dashed rgba(255,255,255,0.4); */
      transform: scale(1.42);
    }
  }

  .spin-container {
    width: 100%;
    height: 100%;
    animation: spin 12s ease-in-out infinite alternate;
    position: relative;
  }

  .shape {
    width: 100%;
    height: 100%;
    transition: border-radius 1s ease-out;

    border-radius : 32% 68% 70% 30% / 30% 30% 70% 70%;

    animation: morph 8s ease-in-out infinite both alternate;
    position: absolute;
    overflow: hidden;
    z-index: 5;
  }

  .bd {
    width: 142%;
    height: 142%;
    position: absolute;
    left: -21%;
    top: -21%;
    background: url(http://getwallpapers.com/wallpaper/full/d/b/f/352615.jpg);
    background-size: 100%;
    background-position: center center;
    display: flex;
    color: #003;
    font-size: 5vw;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    animation: spin 12s ease-in-out infinite alternate-reverse;
    opacity: 1;
    z-index: 2;
  }

  @keyframes morph {
    0% {
      border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
    }
    100% {
      border-radius: 40% 60%;
    }
  }

  @keyframes spin {
    to {
      transform: rotate(2turn);
    }
  }
`;
