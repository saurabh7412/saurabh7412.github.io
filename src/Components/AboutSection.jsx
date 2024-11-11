import React from "react";
import { styled } from "styled-components";
import gif2 from "../images/gif2.gif";
import check from "../images/check.png";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { CheckCircleIcon as MdCheckCircle } from "@chakra-ui/icons";

const AboutSection = () => {
  return (
    <div id="about" class="about section">
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
              <ListItem className="listitem">
                <ListIcon
                  as={MdCheckCircle}
                  color="#04aa6d"
                  style={{ marginRight: "10px" }}
                />
                Hello! This is <span>SAURABH BHATT</span>, a Full-Stack
                Developer passionate about creating impactful web applications.
              </ListItem>
              <ListItem className="listitem">
                <ListIcon
                  as={MdCheckCircle}
                  color="#04aa6d"
                  style={{ marginRight: "10px" }}
                />
                1+ year experience with Ruby on Rails, React, and PostgreSQL
                integration, alongside expertise in the MERN stack.
              </ListItem>
              <ListItem className="listitem">
                <ListIcon
                  as={MdCheckCircle}
                  color="#04aa6d"
                  style={{ marginRight: "10px" }}
                />
                Proficient in AI bot development, including function calling,
                prompt engineering, intent extraction, and model training using
                Google Gemini. Knowledgable about CrewAI Agentic framework.
              </ListItem>
              <ListItem className="listitem">
                <ListIcon
                  as={MdCheckCircle}
                  color="#04aa6d"
                  style={{ marginRight: "10px" }}
                />
                Experienced in creating custom scripts with Google Scripts to
                automate workflows and enhance functionality.
              </ListItem>
              <ListItem className="listitem">
                <ListIcon
                  as={MdCheckCircle}
                  color="#04aa6d"
                  style={{ marginRight: "10px" }}
                />
                Supervised junior developers and interns, promoting teamwork and
                growth, and acted as a liaison between Product and Development
                Leads.
              </ListItem>
              <ListItem className="listitem">
                <ListIcon
                  as={MdCheckCircle}
                  color="#04aa6d"
                  style={{ marginRight: "10px" }}
                />
                Built 4 major projects and 6+ mini projects, strengthening
                skills in React, HTML, CSS, JavaScript, and Data Structures and
                Algorithms.
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
