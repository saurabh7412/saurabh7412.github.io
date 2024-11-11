import React from "react";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../images/logo.png";
import styled from "styled-components";
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
    <NAV_MENU id="nav-menu">
      <WRAPPER>
        <div className="navname">
          <Text>
            <span>SAURABH</span> BHATT
          </Text>
        </div>

        <div className="links">
          <Link className="nav-link home" to="home" smooth={true}>
            HOME
          </Link>
          <Link className="nav-link about" to="about" smooth={true}>
            ABOUT
          </Link>
          <Link className="nav-link projects" to="projects" smooth={true}>
            PROJECT
          </Link>
          <Link to="github1" smooth={true}>
            GITHUB
          </Link>
          <Link className="nav-link skills" to="skills" smooth={true}>
            SKILLS
          </Link>
          <Link className="nav-link contact" to="contact" smooth={true}>
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

        <div className="links-2">
          <div className="dropdown">
            <button className="dropbtn">
              <HamburgerIcon />
            </button>
            <div className="dropdown-content">
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
      </WRAPPER>
    </NAV_MENU>
  );
};

const NAV_MENU = styled.div`
  width: 100%;
`;

const WRAPPER = styled.div`
  height: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #212121;
  color: white;
  position: fixed;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  top: 0;
  z-index: 1;
  padding: 0 1rem;

  .navname {
    font-size: 23px;
  }

  span {
    color: #04aa6d;
  }

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    max-width: 70%;
  }

  .links a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    white-space: nowrap;
  }

  .links a:hover {
    cursor: pointer;
    color: #04aa6d;
    transition: 500ms;
  }

  #resume-button-1 {
    background-color: #04aa6d;
    padding: 5px 20px;
    border: none;
    border-radius: 10px;
    font-size: 21px;
    cursor: pointer;
    transition: 600ms;
  }

  #resume-button-1:hover {
    color: #04aa6d;
    background-color: #212121;
  }

  .links-2 {
    display: none;
  }

  .dropbtn {
    background-color: #04aa6d;
    color: white;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    min-width: 160px;
    border-radius: 5px;
    right: 0;
  }

  .dropdown-content a,
  .dropdown-content button {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    width: 100%;
    text-align: left;
    white-space: nowrap;
  }

  .dropdown-content a:hover {
    background-color: #04aa6d;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  @media only screen and (max-width: 768px) {
    .links {
      display: none;
    }

    .links-2 {
      display: block;
    }
  }
`;
