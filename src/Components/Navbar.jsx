import React from "react";
import { Box, HStack, Image,Text } from "@chakra-ui/react";
import logo from "../images/logo.png";
import { styled } from "styled-components";
import {HashLink as Link} from "react-router-hash-link";


export const Navbar = () => {
  return (
    <>
      {/* <Box></Box> */}
      <WRAPPER>
        <div>
          {/* <img src={logo} /> */}
          <text><span >SAURABH</span> BHATT</text>
        </div>
        <div className="links">
          <Link class="nav-link home" to={"#home"}>HOME</Link>
          {/* <a class="nav-link home" >HOME</a> */}
          
          <Link class="nav-link about" to={"#about"} >ABOUT</Link>
          <a class="nav-link projects">PROJECT</a>
          <a>GITHUB</a>
          <a class="nav-link skills">SKILLS</a>
          <a class="nav-link contact">CONTACT</a>
          <a href="https://drive.google.com/file/d/19RW0qYZv-9deVv_dgljMndNBcLL6z6BD/view" target="_blank" class="nav-link resume" id="resume-link-1">RESUME</a>
        </div>

        <div className="links-2">
          <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
              <a href="#">HOME</a>
              <a href="#">ABOUT</a>
              <a href="#">PROJECT</a>
              <a href="#">GITHUB</a>
              <a href="#">SKILLS</a>
              <a href="#">CONTACT</a>
              <a href="#">RESUME</a>
            </div>
          </div>
        </div>
      </WRAPPER>
    </>
  );
};


const WRAPPER = styled.div`
  width: 100%;
  height: 60px;
  box-size: border-box;
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  background-color: #212121;
  color: white;
  position : fixed;
  top : 0px;
  text{
    font-size : 23px;
    margin-left :30px;
  }

  span {
    color : #04aa6d;
    
  }

  @media only screen and  ( max-width: 768px) {
    ${'' /* flex-direction: column; */}
    .links{
      visibility : hidden;
    }
    .links-2 {
      visibility : visible;
      ${'' /* box-sizing : border-box; */}
    }
    img {
      width : 100%;
    }
    .dropdown {
      margin-right : 30px;
    }
    .dropdown-content a:hover {
    background-color: red;
  }

  }

  @media only screen and (min-width : 769px) and (max-width: 1900px) {
    .links{
      visibility : visible;
    }
    .links-2 {
      visibility : hidden;
    }

  }

  img {
    width: 70%;
    ${"" /* border : 1px solid; */}

  }

  .links {
    margin-left : 80px;
    width: 70%;
    display: flex;
    justify-content: space-between;
    ${'' /* padding: 30px; */}
    font-size: 20px;
    
  }
  .links a {
    color : white;
    text-decoration : none;
  }

  .links a: hover {
    cursor: pointer;
    color : #04aa6d;
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
    border-radius : 5px;
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
    border-radius : 5px;
    
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
    border-radius : 5px;
    scale : 1.1;
    transition : 500ms;
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
