import React from "react";
import { TypeAnimation } from "react-type-animation";
import profile from "../images/profile-pic.jpg";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";
import mobile from "../images/mobile.png";
import styled from "styled-components";
import { ViewIcon } from "@chakra-ui/icons";
import resume from "../images/Saurabh-Bhatt-Resume.pdf";

const HomeSection = () => {
  const handleResumeDownload = () => {
    window.open(
      `https://drive.google.com/file/d/1Ql90y1VK6poVCrwVZvBJ5UXgN2ndgawq/view?usp=sharing`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div id="home">
      <DIV>
        <div id="homeContent">
          <h1>
            <span style={{ color: "white" }}> Hello, My Name is </span>
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
              `A Full Stack Web Developer`,
              1500,
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
              marginLeft: "10px",
            }}
          />
          <div className="link-1">
            <a
              href="https://www.linkedin.com/in/saurabh7412/"
              title="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/saurabh7412"
              target="_blank"
              title="Github"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub" />
            </a>
            <a href="mailto:saurabh7412@gmail.com" title="Email">
              <img src={email} alt="Email" />
            </a>
            <a href="tel:+919810295216" title="Mobile">
              <img src={mobile} alt="Mobile" />
            </a>
          </div>

          <div className="link-2">
            <button id="resume-button-2" onClick={handleResumeDownload}>
              <a id="resume-link-2" href={resume} download>
                Resume <ViewIcon style={{ marginLeft: "10px" }} />
              </a>
            </button>
          </div>
        </div>

        <div className="container">
          <div className="box">
            <div className="spin-container">
              <div className="shape">
                <div className="bd">
                  <img src={profile} alt="Profile" />
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
  margin-top: 100px;
  text-align: left;
  flex-wrap: wrap;
  padding-right: 20px;

  #homeContent {
    flex: 1;
    padding: 20px;
    min-width: 300px;
  }

  .link-2 {
    margin: 20px 0;
    display: flex;
    justify-content: flex-start;
  }

  .link-2 button {
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #04aa6d;
    border: 1px solid #04aa6d;
    box-shadow: rgba(150, 150, 150, 0.45) 0px 5px 10px;
    cursor: pointer;
    transition: transform 600ms;
  }

  .link-2 button:hover {
    transform: scale(1.1);
    background-color: #212121;
  }

  .link-2 a {
    color: white;
    text-decoration: none;
  }

  .link-2 a:hover {
    color: #04aa6d;
  }

  h1 {
    margin: 20px 0;
  }

  .link-1 {
    display: flex;
    gap: 10px;
    margin: 20px 0;
  }

  .link-1 img {
    width: 40px;
    background-color: #04aa6d;
    padding: 8px;
    border: 1px solid #04aa6d;
    box-shadow: rgba(150, 150, 150, 0.45) 0px 5px 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 500ms;
  }

  .link-1 img:hover {
    transform: scale(1.2);
  }

  .container {
    flex: 1;
    width: 100%;
    min-width: 300px;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: 20px auto;
  }

  .box {
    width: 60vmin;
    height: 60vmin;
    position: relative;
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
    border-radius: 32% 68% 70% 30% / 30% 30% 70% 70%;
    animation: morph 8s ease-in-out infinite both alternate;
    position: absolute;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .bd {
    width: 142%;
    height: 142%;
    position: absolute;
    left: -21%;
    top: -21%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: spin 12s ease-in-out infinite alternate-reverse;
    opacity: 1;
  }

  .bd img {
    width: 75%;
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

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    .link-1 {
      justify-content: center;
    }

    .link-2 {
      justify-content: center;
    }
  }

  @media only screen and (max-width: 500px) {
    .link-1 img {
      width: 30px;
      padding: 5px;
    }

    .box {
      width: 80vmin;
      height: 80vmin;
    }
  }
`;
