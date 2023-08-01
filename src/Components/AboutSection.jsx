import React from "react";
import { styled } from "styled-components";
import gif2 from "../images/gif2.gif";
import check from "../images/check.png";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { CheckCircleIcon as MdCheckCircle } from "@chakra-ui/icons";

const AboutSection = () => {
  return (
    <div  id="about" class="about section">

    <DIV>
      <h1>
        <span id="about1">About</span> <span id="about2">Me</span>
      </h1>

      <div id="about3">
        <div id="about3-1">
          <img src={gif2} />
        </div>

        <div className="about3-2" id="user-detail-intro">
          <List spacing={10}>
            <ListItem className="listitem" >
              <ListIcon as={MdCheckCircle} color="#04aa6d" style={{marginRight:"10px"}}/>
              Hello My name is <span>SAURABH BHATT</span> and I enjoy creating
              things that live on the internet.
            </ListItem>
            <ListItem className="listitem">
              <ListIcon as={MdCheckCircle} color="#04aa6d" style={{marginRight:"10px"}}/>
              Quick learner and an aspiring full-stack web developer with core
              knowledge of MERN stack technology.
            </ListItem>
            <ListItem className="listitem">
              <ListIcon as={MdCheckCircle} color="#04aa6d" style={{marginRight:"10px"}}/>
              Full Stack Developer with hands on experience in building React
              Apps. Works efficiently both in frontend as well as backend and is
              proficient in Data Structure and Algorithms with good problem
              solving skills.
            </ListItem>
            <ListItem className="listitem">
              <ListIcon as={MdCheckCircle} color="#04aa6d" style={{marginRight:"10px"}}/>
              I built 4 major projects and 6+ mini projects. Learned a great
              deal about teamwork, leadership, and communication. After months
              of rigorous training, here I am looking for an opportunity as a
              full Stack web Developer.HTML, CSS, JavaScript
            </ListItem>
          </List>
        </div>

      </div>
    </DIV>
    </div>
  );
};

export default AboutSection;

const DIV = styled.div`
  ${"" /* border: 2px solid red; */}
  h1 {
    margin-top: 40px;
  }

  #about1 {
    color: #04aa6d;
  }

  #about2 {
    color: white;
  }
  #about3 {
    display: flex;
    width: 90%;
    margin: auto;
    justify-content: space-between;
  }
  #about3-1 img {
    width: 100%;
  }
  .about3-2 {
    width: 50%;
    margin-top: 40px;
    font-size: 22px;
    text-align: start;
    color: white;
  }
  .listitem {
    margin-bottom: 20px;
  }





  @media only screen and (max-width: 768px) and (min-width: 500px) {
    #about3 {
      flex-direction: column;
      align-items: center;
    }
    #about3-1 img {
      width: 70%;
    }
    .about3-2 {
      width: 80%;
    }
  }

  /* Add styles for small screens */
  @media only screen and (max-width: 500px) {
    h1 {
      font-size: 24px;
    }
    #about3 {
      flex-direction: column;
      align-items: center;
    }
    #about3-1 img {
      width: 90%;
    }
    .about3-2 {
      width: 90%;
      font-size: 18px;
    }
  }
`;
// style={{color:'#04aa6d'}}
