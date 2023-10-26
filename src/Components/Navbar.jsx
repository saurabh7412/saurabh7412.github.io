import React from "react";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../images/logo.png";
import { styled } from "styled-components";
import resume from "../images/Saurabh-Bhatt-Resume.pdf";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  return (
    <div id="nav-menu">
      <WRAPPER>
        <div className="navname">
          {/* <img src={logo} /> */}
          <text>
            <span>SAURABH</span> BHATT
          </text>
        </div>



        <div className="links-2">
          <div class="dropdown">
            <button class="dropbtn">
              <HamburgerIcon />
            </button>
            <div class="dropdown-content">
              <Link to="home" smooth={true}>
                HOME
              </Link>
              <Link to="about" smooth={true}>
                ABOUT
              </Link>
              <Link to="projects" smooth={true}>
                PROJECT
              </Link>
              <Link to="github1" smooth={true}>
                GITHUB
              </Link>
              <Link to="skills" smooth={true}>
                SKILLS
              </Link>
              <Link to="contact" smooth={true}>
                CONTACT
              </Link>
              <button id="resume-button-1">
                <a
                  href={resume}
                  download
                  className="nav-link resume"
                  id="resume-link-1"
                >
                  RESUME
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="links">
          <Link class="nav-link home" to="home" smooth={true}>
            HOME
          </Link>
          {/* <a class="nav-link home" >HOME</a> */}

          <Link class="nav-link about" to="about" smooth={true}>
            ABOUT
          </Link>
          <Link class="nav-link projects" to="projects" smooth={true}>
            PROJECT
          </Link>
          <Link to="github1" smooth={true}>
            GITHUB
          </Link>
          <Link class="nav-link skills" to="skills" smooth={true}>
            SKILLS
          </Link>
          <Link class="nav-link contact" to="contact" smooth={true}>
            CONTACT
          </Link>

          <button id="resume-button-1">
            <a
              href={resume}
              download
              className="nav-link resume"
              id="resume-link-1"
            >
              RESUME
            </a>
          </button>
        </div>

        
      </WRAPPER>
    </div>
  );
};

const WRAPPER = styled.div`
  height: 60px;
  box-size: border-box;
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  background-color: #212121;
  color: white;
  position: fixed;
  z-index : 1;
  top: 0px;
  text {
    font-size: 23px;
    margin-left: 30px;
  }

  span {
    color: #04aa6d;
  }

  #resume-button-1 {
    background-color: #04aa6d;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 21px;
    padding: 5px 20px;

    border: 1px solid #04aa6d;
    box-shadow: rgba(150, 150, 150, 0.45) 0px 5px 10px;
    border-radius: 10px;
  }

  #resume-button-1:hover {
    cursor: pointer;
    scale: 1.1;
    transition: 600ms;
    color: #04aa6d;
    background-color: #212121;
  }

  @media only screen and (max-width: 500px) {
    width : 100%;

    .links {
      visibility: hidden;
    }
    .links-2 {
      visibility: visible;
    }
    img {
      width: 100%;
    }
    .dropdown {
      margin-right: 30px;
    }
    .dropdown-content a:hover {
      background-color: red;
    }
  }

  @media only screen and (min-width: 500px) and (max-width: 1900px) {
    width: 100%;
    .links {
      visibility: visible;
    }
    .links-2 {
      visibility: hidden;
    }
  }

  img {
    width: 70%;
    ${"" /* border : 1px solid; */}
  }

  .links {
    margin-left: 80px;
    padding-right : 50px;
    width: 70%;
    display: flex;
    justify-content: space-between;
    ${"" /* padding: 30px; */}
    font-size: 20px;
  }
  .links a {
    color: white;
    text-decoration: none;
  }

  .links a:hover {
    cursor: pointer;
    color: #04aa6d;
    scale: 1.2;
    transition: 500ms;
  }

  .links-2 {
    margin-right: 20px;
  }

  .dropbtn {
    background-color: #04aa6d;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    margin-left : 220px;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
    margin-right: 45px;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 5px;
    margin-left: 110px;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #04aa6d;
    border-radius: 5px;
    scale: 1.1;
    transition: 500ms;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }
`;
