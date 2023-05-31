import { color } from "framer-motion";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import profile from "../images/prof1.gif";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";
import mobile from "../images/mobile.png";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { Button, IconButton, Image } from "@chakra-ui/react";
import { DownloadIcon, EmailIcon, PhoneIcon, ViewIcon } from "@chakra-ui/icons";
import resume from "../images/Saurabh-Bhatt-Resume.pdf"

const HomeSection = () => {
  return (
    <DIV>
      <div style={{ paddingBottom: "10px" }} id="#home">
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
          id="user-detail-intro"
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
          <a href="https://drive.google.com/file/d/19RW0qYZv-9deVv_dgljMndNBcLL6z6BD/view">
            <Button id="resume-link-2">
              Resume <ViewIcon style={{ marginLeft: "10px" }} />
            </Button>
          </a>
          <a>
            <a href={resume} download><Button>
              <DownloadIcon />
            </Button>
            </a>
          </a>
        </div>
      </div>
      <div>
        <img src={profile} class="home-img" />
      </div>
    </DIV>
  );
};

export default HomeSection;

const DIV = styled.div`
  background-color: rgb(15, 22, 36);
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  .link-2 {
    width: 25%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  .link-2 button {
    background-color: #04aa6d;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
    font-family: revert;
  }

  .link-2 button:hover {
    scale: 1.1;
    transition: 500ms;
  }

  img {
    border-radius: 50%;
    margin-right: 100px;
    margin-top: 130px;
    margin-bottom: 130px;
  }
  img:hover {
    cursor: pointer;
    scale: 1.2;
    transition: 700ms;
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
  }
  .link-1 img {
    ${"" /* border : 1px solid blue ; */}
    background-color :  #04aa6d;
    width: 50%;
    margin: auto;
    padding: 10px;
  }
  .link-1 img :hover {
    scale: 1.1;
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
`;
